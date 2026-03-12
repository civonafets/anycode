import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const DEFAULT_STATE = Object.freeze({
  organizations: [],
  users: [],
  sessions: [],
  approvals: []
});

export class JsonStore {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async init() {
    await mkdir(dirname(this.filePath), { recursive: true });
    try {
      await readFile(this.filePath, 'utf8');
    } catch {
      await this.write(structuredClone(DEFAULT_STATE));
    }
  }

  async read() {
    await this.init();
    const raw = await readFile(this.filePath, 'utf8');
    return JSON.parse(raw);
  }

  async write(state) {
    const next = JSON.stringify(state, null, 2);
    const tempPath = `${this.filePath}.tmp`;
    await writeFile(tempPath, next);
    await rename(tempPath, this.filePath);
  }

  async update(mutator) {
    const state = await this.read();
    const nextState = await mutator(state);
    await this.write(nextState);
    return nextState;
  }
}
