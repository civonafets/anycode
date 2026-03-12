import { createApp } from './app.mjs';

const port = Number(process.env.PORT || 4010);
const { server, storePath } = await createApp({
  storePath: process.env.MGPS_STATE_FILE
});

server.listen(port, '127.0.0.1', () => {
  console.log(
    JSON.stringify(
      {
        ok: true,
        service: 'memory-guardrail-proof-system-api',
        listen: `http://127.0.0.1:${port}`,
        store_path: storePath
      },
      null,
      2
    )
  );
});
