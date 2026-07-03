"use client";

import { useState } from "react";
import { Heart, Loader2, Send } from "lucide-react";

type State = "idle" | "sending" | "done" | "error";

export default function WishForm() {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, relationship, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("done");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (state === "done") {
    return (
      <div className="rounded-3xl border border-gold/30 bg-white/60 p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
          <Heart size={26} className="fill-current" />
        </div>
        <h3 className="font-serif text-2xl text-cream-ink">Thank you 💛</h3>
        <p className="mx-auto mt-2 max-w-sm text-cream-ink/70">
          Your message means the world — I&apos;ll treasure it. Thank you for
          celebrating with me.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-gold/25 bg-white/70 px-4 py-3 text-cream-ink placeholder:text-cream-ink/35 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-gold/25 bg-white/50 p-6 shadow-sm backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          required
        />
        <input
          className={field}
          placeholder="How do we know each other? (optional)"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          maxLength={80}
        />
      </div>
      <textarea
        className={`${field} mt-4 min-h-[120px] resize-y`}
        placeholder="Leave a note, a prayer, a memory, some advice…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={1000}
        required
      />

      {state === "error" && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-deep px-6 py-3.5 font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={17} /> Send my well-wishes
          </>
        )}
      </button>

      <p className="mt-3 text-xs text-cream-ink/45">
        Your message goes privately to Favour — it won&apos;t be shown here.
      </p>
    </form>
  );
}
