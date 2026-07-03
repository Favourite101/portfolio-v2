import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { name?: unknown; message?: unknown; relationship?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const relationship =
    typeof body.relationship === "string" ? body.relationship.trim() : "";

  if (!name || !message) {
    return NextResponse.json(
      { error: "Please add your name and a message." },
      { status: 400 },
    );
  }
  if (name.length > 80 || message.length > 1000 || relationship.length > 80) {
    return NextResponse.json({ error: "That's a little too long." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "The guestbook isn't set up yet. Please check back soon!" },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("grad_wishes").insert({
    name,
    message,
    relationship: relationship || null,
  });

  if (error) {
    console.error("grad_wishes insert failed:", error.message);
    return NextResponse.json(
      { error: "Something went wrong saving your message." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
