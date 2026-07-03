"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { socials } from "@/lib/data";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
    } catch {
      // Clipboard API can be blocked (e.g. insecure context) — fall back.
      const el = document.createElement("textarea");
      el.value = socials.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label={`Copy email address ${socials.email}`}
      className="glass glow-hover group inline-flex items-center gap-3 rounded-full px-5 py-2.5 font-mono text-sm"
    >
      <span className="text-white/60 transition-colors group-hover:text-accent-soft">
        {socials.email}
      </span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-accent">
          <Check size={15} /> Copied!
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-white/40 transition-colors group-hover:text-accent">
          <Copy size={15} /> Copy
        </span>
      )}
    </button>
  );
}
