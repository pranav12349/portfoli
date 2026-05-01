"use client";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Eye, Zap, BarChart2, Target, Clock } from "lucide-react";

const stats = [
  {
    icon: Eye,
    value: "100k",
    label: "Total Views Generated",
    sub: "Across all platforms combined",
    color: "ember",
  },
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Average ROAS on Ad Edits",
    sub: "Return on ad spend improvement",
    color: "ember",
  },
  {
    icon: BarChart2,
    value: "80%+",
    label: "Retention Rate",
    sub: "Average on short-form content",
    color: "ember",
  },
  {
    icon: Zap,
    value: "48h",
    label: "Turnaround Time",
    sub: "For short-form projects",
    color: "ember",
  },
  {
    icon: Target,
    value: "15+",
    label: "Viral Videos Edited",
    sub: "100k views milestone reached",
    color: "ember",
  },
  {
    icon: Clock,
    value: "2yr+",
    label: "Industry Experience",
    sub: "Brands, creators, agencies",
    color: "ember",
  },
];

const highlights = [
  "Platform-specific hooks that stop the scroll",
  "Tight pacing matched to your audience's attention span",
  "Sound design that amplifies emotion",
  "Color grades built for each platform's algorithm",
  "Subtitles, captions & graphics that retain viewers",
];

export default function Results() {
  useScrollReveal();

  return (
    <section id="results" className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ember/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="line-deco" />
            <span className="text-xs font-mono text-ember tracking-widest uppercase">
              Impact
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white tracking-wide mb-4">
            REAL RESULTS
          </h2>
          <p className="text-mist text-base font-body leading-relaxed">
            Numbers don't lie. Here's the measurable impact my edits have delivered
            for brands and creators who trusted the process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="reveal stat-card rounded-xl p-5"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <Icon size={20} className="text-ember mb-4" />
                  <div className="font-display text-3xl text-white mb-1">{s.value}</div>
                  <div className="text-sm font-body font-medium text-white mb-1">{s.label}</div>
                  <div className="text-xs text-mist/60 font-mono">{s.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Right: Approach */}
          <div className="reveal-left">
            <div className="mb-8">
              <span className="text-xs font-mono text-ember tracking-widest uppercase">
                How I Get Results
              </span>
              <h3 className="font-display text-3xl text-white mt-3 mb-6 tracking-wide">
                EDITS BUILT FOR RETENTION
              </h3>
              <p className="text-mist text-sm font-body leading-relaxed">
                Every edit is engineered for the platform. I study what hooks work,
                what pacing keeps viewers, and what visuals drive action. Then I
                build that into every frame.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-graphite border border-white/5 hover:border-ember/20 transition-all group"
                >
                  <span className="text-ember font-mono text-xs mt-0.5 font-bold shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-sm text-white/80 font-body group-hover:text-white transition-colors">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl border border-ember/20 bg-ember/5">
              <p className="text-sm text-white/80 font-body leading-relaxed italic">
                "High-retention editing isn't magic — it's intentional. Every cut,
                every sound effect, every text pop is placed with purpose."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-ember/20 flex items-center justify-center">
                  <span className="text-xs text-ember font-display">V</span>
                </div>
                <span className="text-xs font-mono text-mist/60">
                  — Editor's Philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}