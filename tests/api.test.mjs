import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { createApp } from '../apps/anymem-api/src/app.mjs';

test('standalone auth and generic approval flow works end-to-end', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'anymem-'));
  const storePath = join(dir, 'state.json');
  const { server } = await createApp({ storePath });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    const registerResponse = await requestJson(`${baseUrl}/api/v1/auth/register`, {
      method: 'POST',
      body: {
        email: 'owner@example.com',
        password: 'super-secret-123',
        display_name: 'Owner',
        workspace_name: 'Standalone Workspace'
      }
    });
    assert.equal(registerResponse.status, 201);
    assert.equal(registerResponse.body.data.actor.email, 'owner@example.com');
    assert.equal(registerResponse.body.data.workspace.name, 'Standalone Workspace');
    assert.ok(registerResponse.body.data.session.access_token);

    const loginResponse = await requestJson(`${baseUrl}/api/v1/auth/login`, {
      method: 'POST',
      body: {
        email: 'owner@example.com',
        password: 'super-secret-123'
      }
    });
    assert.equal(loginResponse.status, 200);
    assert.ok(loginResponse.body.data.session.access_token);

    const token = loginResponse.body.data.session.access_token;

    const approvalResponse = await requestJson(`${baseUrl}/api/v1/approvals`, {
      method: 'POST',
      token,
      body: {
        workflow_type: 'general_work_item',
        title: 'Approve updated team operating note',
        reason: 'Agent proposes changing shared memory after repeated confusion in approvals.',
        context: {
          domain: 'operations',
          target: 'memory_record'
        }
      }
    });
    assert.equal(approvalResponse.status, 201);
    assert.equal(approvalResponse.body.data.status, 'pending');
    assert.equal(approvalResponse.body.data.workflow_type, 'general_work_item');

    const approvalId = approvalResponse.body.data.id;

    const messageResponse = await requestJson(`${baseUrl}/api/v1/approvals/${approvalId}/messages`, {
      method: 'POST',
      token,
      body: {
        speaker_type: 'user',
        body: 'Explain why this memory change is better than adding a new rule.'
      }
    });
    assert.equal(messageResponse.status, 201);
    assert.equal(messageResponse.body.data.messages.length, 2);

    const dispositionResponse = await requestJson(
      `${baseUrl}/api/v1/approvals/${approvalId}/dispositions`,
      {
        method: 'POST',
        token,
        body: {
          action: 'request_proof',
          rationale: 'Show an example where the current memory failed.'
        }
      }
    );
    assert.equal(dispositionResponse.status, 201);
    assert.equal(dispositionResponse.body.data.status, 'needs_proof');

    const listResponse = await requestJson(`${baseUrl}/api/v1/approvals`, {
      method: 'GET',
      token
    });
    assert.equal(listResponse.status, 200);
    assert.equal(listResponse.body.meta.count, 1);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }
});

async function requestJson(url, options) {
  const response = await fetch(url, {
    method: options.method,
    headers: {
      'content-type': 'application/json',
      ...(options.token ? { authorization: `Bearer ${options.token}` } : {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  return {
    status: response.status,
    body: await response.json()
  };
}
