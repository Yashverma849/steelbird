import { readFile } from "node:fs/promises";
import path from "node:path";

const FOOTER_BG_PATH = path.join(process.cwd(), "public", "footer-background.png");

export async function GET() {
  try {
    const file = await readFile(FOOTER_BG_PATH);
    return new Response(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Unable to load footer background image", { status: 404 });
  }
}
