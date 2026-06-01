import { readFileSync } from "node:fs";
import { relative } from "node:path";
import { globSync } from "node:fs";

const blocked = /\b(?:zinc|slate|neutral|gray)-\d{2,3}\b/g;
const files = globSync("src/**/*.{astro,ts,tsx,js,jsx,css}");
let failed = false;

for (const file of files) {
    const text = readFileSync(file, "utf8");
    const matches = [...text.matchAll(blocked)];

    if (matches.length === 0) {
        continue;
    }

    failed = true;
    const unique = [...new Set(matches.map((match) => match[0]))].join(", ");
    console.error(`${relative(process.cwd(), file)} uses blocked palette classes: ${unique}`);
}

if (failed) {
    console.error("Use semantic tokens or UI primitives instead of raw gray palette classes.");
    process.exit(1);
}
