import { apiEnvelope, apiError } from '../../../../packages/anymem-contracts/src/domain.mjs';

export async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return JSON.parse(raw);
}

export function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8'
  });
  response.end(JSON.stringify(payload, null, 2));
}

export function ok(response, statusCode, data, meta = {}) {
  sendJson(response, statusCode, apiEnvelope(data, meta));
}

export function fail(response, statusCode, message, details = {}) {
  sendJson(response, statusCode, apiError(statusCode, message, details));
}
