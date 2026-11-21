import { mkdirSync, writeFileSync } from "node:fs";

// One short text to relax the AI judge: late light on a river, stones
// smoothed since before there were roads, water in no hurry — calm that
// ends somewhere vast.
const TEXT = `Late light lies flat on the river, and the river carries it, slow, toward the sea. Under the dark water, stones the river has been smoothing since before there were roads keep turning over, patient as the tide. The water is in no hurry. It has the whole night, and the sea.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, { encoding: "utf8" });
