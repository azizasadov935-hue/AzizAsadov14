import fs from "fs/promises";
import path from "path";

const outDir = path.join(process.cwd(), "public", "images");

const images = [
  ["01-office-top.jpg", "https://i.postimg.cc/sXVSDL9W/Chat-GPT-Image-Sep-4-2026-02-57-17-PM.png"],
  ["02-orange-chair.jpg", "https://i.postimg.cc/v8K1pTj3/Chat-GPT-Image-Sep-4-2026-02-56-39-PM.png"],
  ["03-orange-portrait.jpg", "https://i.postimg.cc/QCzWmdLz/Chat-GPT-Image-Sep-4-2026-02-55-16-PM.png"],
  ["04-office-standing.jpg", "https://i.postimg.cc/N02Ck5WZ/Chat-GPT-Image-Sep-4-2026-02-29-13-PM.png"],
  ["05-orange-chair-full.jpg", "https://i.postimg.cc/fk4RktnC/Chat-GPT-Image-Sep-4-2026-02-27-47-PM.png"],
  ["06-red-portrait.jpg", "https://i.postimg.cc/9fXZcSBg/Chat-GPT-Image-Aug-26-2026-10-13-47-PM.png"],
  ["07-red-thinking.jpg", "https://i.postimg.cc/8kfWkLLw/Chat-GPT-Image-Aug-26-2026-10-16-31-PM.png"],
  ["08-white-portrait.jpg", "https://i.postimg.cc/nLLjymHj/Chat-GPT-Image-Aug-27-2026-12-00-18-PM.png"],
  ["09-mirror-shirt.jpg", "https://i.postimg.cc/jSMC4jzd/Chat-GPT-Image-Aug-28-2026-08-41-22-PM.png"],
  ["10-mirror-open.jpg", "https://i.postimg.cc/kX94rSs8/Chat-GPT-Image-Aug-28-2026-08-58-41-PM.png"],
  ["avatar.png", "https://i.postimg.cc/Wz7sp98d/avatar.png"],
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  for (const [name, url] of images) {
    const dest = path.join(outDir, name);
    try {
      process.stdout.write(`Downloading ${name}... `);
      await download(url, dest);
      console.log("ok");
    } catch (e) {
      console.error(`failed: ${e.message}`);
    }
  }
  console.log(`Done. Images saved to ${outDir}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
