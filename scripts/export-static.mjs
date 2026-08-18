import { writeFile } from "node:fs/promises";
import worker from "../worker/index.js";

const response = await worker.fetch(new Request("https://localhost/"), {}, {});
const html = await response.text();

await writeFile(new URL("../index.html", import.meta.url), html, "utf8");
console.log("index.html gerado para GitHub Pages.");
