"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const clients = [
  {
    name: "Inkvia",
    type: "Brand",
    platform: "Instagram",
    ig: "https://www.instagram.com/inkvia.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    description: "Creative brand content & reels",
  },
  {
    name: "DigiDifference",
    type: "Agency",
    platform: "Multi-platform",
    ig: "https://instagram.com/digidifference",
    description: "Digital marketing video content",
  },
  {
    name: "Media House",
    type: "Media",
    platform: "YouTube & Reels",
    ig: "https://www.instagram.com/mediahouse.gcet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    description: "Long-form & short-form edits",
  },
];

export default function Clients() {
  useScrollReveal();

  return (
    <section id="clients" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      {/* Ambient */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-ember/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="line-deco" />
            <span className="text-xs font-mono text-ember tracking-widest uppercase">
              Trusted By
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white tracking-wide mb-4">
            WORKED WITH
          </h2>
          <p className="text-mist text-base max-w-lg font-body leading-relaxed">
            Edited content for brands and creators across social media platforms —
            delivering edits that drive real views and engagement.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className="reveal client-badge rounded-xl p-6 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-lg bg-graphite border border-white/10 flex items-center justify-center">
                  <span className="font-display text-lg text-ember">
                    {c.name[0]}
                  </span>
                </div>
                <span className="text-xs font-mono text-mist/60 bg-white/5 px-2 py-1 rounded tracking-wide">
                  {c.type}
                </span>
              </div>

              <h3 className="font-display text-2xl text-white tracking-wide mb-1">
                {c.name}
              </h3>
              <p className="text-mist text-sm mb-3 font-body">{c.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-mist/50 font-mono">{c.platform}</span>
                {c.ig && (
                  <a
                    href={c.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-ember/70 hover:text-ember transition-colors font-mono"
                    aria-label={`${c.name} Instagram`}
                  >
                    <span>Instagram</span>
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="reveal overflow-hidden rounded-lg border border-white/5 bg-graphite/50 py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) =>
              ["Reels", "TikTok", "YouTube Shorts", "Long-Form", "Ads", "Brand Content", "Viral Edits", "Color Grading", "Motion Graphics"].map((tag) => (
                <span
                  key={`${i}-${tag}`}
                  className="mx-6 text-xs font-mono text-mist/40 tracking-widest uppercase"
                >
                  {tag} <span className="text-ember/40 mx-3">◆</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}