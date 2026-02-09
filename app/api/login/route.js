export async function POST(req) {
  const { u, p } = await req.json();

  if (u === "t.milner" && p === "Gmilner1174") {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response("Unauthorized", { status: 401 });
}
