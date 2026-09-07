// Downloads Lovable CDN assets into public/ so the site also works on
// static hosts (e.g. GitHub Pages) that do not serve /__l5e/ URLs.
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";

const ASSET_DIR = "src/assets";
const ORIGIN = "https://project--51404c11-7c9e-4304-a62c-caab13723564-dev.lovable.app";

const entries = (await readdir(ASSET_DIR)).filter((f) => f.endsWith(".asset.json"));

let downloaded = 0;
for (const file of entries) {
  const pointer = JSON.parse(await readFile(join(ASSET_DIR, file), "utf8"));
  if (!pointer.url) continue;
  const target = join("public", pointer.url.replace(/^\//, ""));
  try {
    const existing = await stat(target);
    if (existing.size > 0) continue;
  } catch {
    // not downloaded yet
  }
  const res = await fetch(ORIGIN + pointer.url);
  if (!res.ok) {
    console.warn(`[assets] failed ${pointer.url}: ${res.status}`);
    continue;
  }
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, Buffer.from(await res.arrayBuffer()));
  downloaded++;
}

console.log(`[assets] ${downloaded} file(s) downloaded, ${entries.length} total`);
