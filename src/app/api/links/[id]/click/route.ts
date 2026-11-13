import { profile } from "@/data/profile";
import { getMongoClient } from "@/lib/mongodb";

export async function POST(
  _req: Request,
  ctx: RouteContext<"/api/links/[id]/click">,
) {
  const { id } = await ctx.params;

  if (!profile.links.some((link) => link.id === id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  const clientPromise = getMongoClient();
  if (!clientPromise) {
    // DB가 설정되지 않았으면 집계 없이 통과시킵니다.
    return Response.json({ ok: true, recorded: false });
  }

  try {
    const client = await clientPromise;
    await client
      .db()
      .collection("clicks")
      .updateOne(
        { linkId: id },
        { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
        { upsert: true },
      );
    return Response.json({ ok: true, recorded: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 500 });
  }
}
