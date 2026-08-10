import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const workerPath = resolve("worker/index.js");
const source = await readFile(workerPath, "utf8");
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const workerModule = await import(moduleUrl);

assert.equal(
  typeof workerModule.default?.fetch,
  "function",
  "worker/index.js deve exportar default.fetch",
);

const response = await workerModule.default.fetch(new Request("https://localhost/"), {}, {});
const html = await response.text();

assert.equal(response.status, 200);
assert.match(response.headers.get("content-type") || "", /text\/html/);
assert.match(html, /Treino Híbrido/i);
assert.match(html, /id="onboarding"/);
assert.match(html, /data-multi="true"/);

console.log("Validação concluída: worker, HTML e entrevista adaptativa estão íntegros.");

