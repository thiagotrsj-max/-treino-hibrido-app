import assert from "node:assert/strict";
import vm from "node:vm";
import worker from "../worker/index.js";

const html = await (await worker.fetch(new Request("https://test.local/"), {}, {})).text();
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
const source = scripts.at(-1)?.[1];
if (!source) throw new Error("Script principal não encontrado");
const cutoff = source.indexOf("\n      document.querySelectorAll('.mode')");
if (cutoff < 0) throw new Error("Ponto de teste não encontrado");
const engineSource = `${source.slice(0, cutoff)}\n;globalThis.__engine={planForDate,getConfig,primaryProgram,profileGoals};})();`;

function engineFor(profile) {
  const app = { activeId: profile.id, profiles: [profile] };
  const context = vm.createContext({
    console,
    localStorage: {
      getItem(key) { return key.includes("profiles") ? JSON.stringify(app) : null; },
      setItem() {},
    },
  });
  vm.runInContext(engineSource, context);
  return context.__engine;
}

function profile(id, primaryGoal, goals, extra = {}) {
  return {
    id,
    name: id,
    primaryGoal,
    goal: primaryGoal,
    goals,
    level: "intermediate",
    age: 35,
    height: 175,
    weight: 78,
    days: 4,
    duration: 60,
    defaultMode: "full",
    state: { runs: [], sessions: {}, days: {} },
    ...extra,
  };
}

function week(engine) {
  return [17, 18, 19, 20, 21, 22, 23].map((day) => engine.planForDate(new Date(2026, 7, day, 12)));
}

const strength = week(engineFor(profile("forca", "strength", ["strength"])));
const performance = week(engineFor(profile("desempenho", "performance", ["performance", "strength"])));
const running = week(engineFor(profile("corrida", "run", ["run"])));
const hypertrophy = week(engineFor(profile("hipertrofia", "hypertrophy", ["hypertrophy"])));
const taf = week(engineFor(profile("taf", "taf", ["taf"])));

for (const plan of [...strength, ...performance, ...running, ...hypertrophy]) {
  const text = `${plan.title} ${plan.desc} ${plan.hint} ${plan.items.map((x) => x.join(" ")).join(" ")}`;
  assert.equal(/TAF/i.test(text), false, `TAF apareceu fora de um perfil TAF: ${text}`);
}
assert.ok(taf.some((plan) => /TAF/.test(plan.title)), "Perfil TAF não recebeu sessões de TAF");
assert.notDeepEqual(strength.map((x) => x.title), performance.map((x) => x.title));
assert.notDeepEqual(strength.map((x) => x.title), running.map((x) => x.title));
assert.notDeepEqual(strength.map((x) => x.title), hypertrophy.map((x) => x.title));
assert.ok(running.filter((x) => x.type === "run").length >= 2, "Perfil de corrida precisa de mais sessões de corrida");
assert.ok(hypertrophy.some((x) => /Peito|Costas|Pernas|Upper|Lower/.test(x.title)), "Hipertrofia precisa de divisão própria");

const conservativeProfile = profile("retorno", "health", ["health"], {
  level: "return",
  age: 62,
  height: 165,
  weight: 95,
  days: 3,
  duration: 30,
});
const conservative = engineFor(conservativeProfile);
const conservativeWeek = week(conservative);
assert.ok(conservativeWeek.filter((x) => x.type !== "rest").every((x) => x.items.length <= 5));

console.log("Personalização validada em força, desempenho, corrida, hipertrofia, TAF e retorno conservador.");
