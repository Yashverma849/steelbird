import { readFile } from "node:fs/promises";
import path from "node:path";

const IMAGE_MAP: Record<string, string> = {
  "apex-x1-orange": path.join(process.cwd(), "public", "Steelbird Apex X1", "orange helmet.png"),
  "apex-x1-blue": path.join(process.cwd(), "public", "Steelbird Apex X1", "blue helmet.png"),
  "apex-x1-green": path.join(process.cwd(), "public", "Steelbird Apex X1", "green helmet.png"),
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ variant: string }> }
) {
  const { variant } = await params;
  const imagePath = IMAGE_MAP[variant];

  if (!imagePath) {
    return new Response("Image not found", { status: 404 });
  }

  try {
    const file = await readFile(imagePath);
    return new Response(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Unable to load image", { status: 404 });
  }
}
