import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { u, p } = await req.json();

  if (u === "t.milner" && p === "Gmilner1174") {
    return NextResponse.json({ ok: true });
  }

  return new NextResponse("Unauthorized", { status: 401 });
}
