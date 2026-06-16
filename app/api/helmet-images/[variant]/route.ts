import { readFile } from "node:fs/promises";

const IMAGE_MAP: Record<string, string> = {
  "apex-x1-orange":
    "C:/Users/Yash/.cursor/projects/c-Users-Yash-Desktop-steelbird-landing-page/assets/c__Users_Yash_AppData_Roaming_Cursor_User_workspaceStorage_80ca79dd2b96f11608c473dfa597c2dc_images_image-22daa22b-74d6-4aea-9170-ec27eadcddb2.png",
  "apex-x1-blue":
    "C:/Users/Yash/.cursor/projects/c-Users-Yash-Desktop-steelbird-landing-page/assets/c__Users_Yash_AppData_Roaming_Cursor_User_workspaceStorage_80ca79dd2b96f11608c473dfa597c2dc_images_image-be6dc00a-826c-4f3c-89d5-4bcdfd33d229.png",
  "apex-x1-green":
    "C:/Users/Yash/.cursor/projects/c-Users-Yash-Desktop-steelbird-landing-page/assets/c__Users_Yash_AppData_Roaming_Cursor_User_workspaceStorage_80ca79dd2b96f11608c473dfa597c2dc_images_image-8af9517b-f80a-493b-a2d0-d8283c050095.png",
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
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Unable to load image", { status: 500 });
  }
}
