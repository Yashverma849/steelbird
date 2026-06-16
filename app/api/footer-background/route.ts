import { readFile } from "node:fs/promises";

const FOOTER_BG_PATH =
  "C:/Users/Yash/.cursor/projects/c-Users-Yash-Desktop-steelbird-landing-page/assets/c__Users_Yash_AppData_Roaming_Cursor_User_workspaceStorage_80ca79dd2b96f11608c473dfa597c2dc_images_screen-c22df5d2-24ff-44ec-8f85-6252b6cb5de1.png";

export async function GET() {
  try {
    const file = await readFile(FOOTER_BG_PATH);
    return new Response(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Unable to load footer background image", { status: 500 });
  }
}
