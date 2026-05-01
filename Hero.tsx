"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Play, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: "1LvxTX7kdPcYg5hcILdS3rxX5aJ1-8iFj",
    title: "Inkvia Brand Reel",
    label: "Brand · Instagram",
  },
  {
    id: "1Pm3A7KM_NYE1arzZSfW6FVnTv4r9rw8O",
    title: "Insta Client Edit",
    label: "Short-form · Instagram",
  },
  {
    id: "1i4LRs5l2ye3Ci0u7bDgwWXUASPk8i751",
    title: "Media House Intro",
    label: "YouTube · Intro",
  },
  {
    id: "1_Po5JsqpyHlz59VmY9HpZvDeuARmDADI",
    title: "Size Change Edit",
    label: "Transition · Reels",
  },
  {
    id: "1uxKObe9TnMvE0ZL1sI5l1wnGtoUfr0jZ",
    title: "Spain Travel Edit",
    label: "Travel · YouTube",
  },
];

const softwares = [
  { name: "After Effects", short: "Ae", color: "#9f9eff" },
  { name: "Premiere Pro", short: "Pr", color: "#9f9eff" },
  { name: "CapCut", short: "CC", color: "#00c8ff" },
  { name: "Filmora", short: "Fi", color: "#ffd700" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto-rotate every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setActive((a) => (a - 1 + videos.length) % videos.length);
  const next = () => setActive((a) => (a + 1) % videos.length);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-obsidian"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-ember/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-ember/5 blur-[80px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Text ── */}
          <div>
            {/* Available badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ember/30 bg-ember/5 mb-6"
              style={{ animation: "fadeIn 0.6s ease forwards" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse-slow" />
              <span className="text-xs text-ember font-mono tracking-widest uppercase">
                Available for Projects
              </span>
            </div>

            {/* Avatar + Name row */}
            <div
              className="flex items-center gap-4 mb-6"
              style={{ animation: "fadeUp 0.7s ease 0.05s both" }}
            >
              {/* Avatar — replace /photo.jpg with your actual photo */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-ember to-[#c73f18] flex items-center justify-center shadow-lg shadow-ember/30 border-2 border-ember/30">
                  {/*
                    Replace the span below with:
                    <img src="/photo.jpg" alt="Pranav Teja" className="w-full h-full object-cover" />
                    after placing your photo in the /public folder as photo.jpg
                  */}
                  <span className="font-display text-2xl text-white select-none">
                    PT
                  </span>
                </div>
                {/* Online indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-obsidian" />
              </div>

              <div>
                <p className="text-xs font-mono text-mist/50 tracking-widest uppercase mb-0.5">
                  Video Editor
                </p>
                <h2 className="font-display text-2xl text-white tracking-widest">
                  PRANAV TEJA
                </h2>
              </div>
            </div>

            {/* Main heading */}
            <h1
              className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-none tracking-wide text-white mb-5"
              style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
            >
              I HELP{" "}
              <span className="text-ember">CREATORS</span>
              <br />
              &amp; BRANDS GROW
              <br />
              <span className="text-white/30">WITH VIDEO.</span>
            </h1>

            <p
              className="text-mist text-base leading-relaxed max-w-md mb-7 font-body"
              style={{ animation: "fadeUp 0.7s ease 0.2s both" }}
            >
              High-retention video edits for{" "}
              <span className="text-white">Reels, TikTok &amp; Shorts</span> —
              and cinematic{" "}
              <span className="text-white">YouTube long-form</span> that keeps
              audiences watching till the end.
            </p>

            {/* Software badges */}
            <div
              className="flex flex-wrap gap-2 mb-8"
              style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
            >
              {softwares.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-graphite border border-white/8 text-xs font-mono text-mist/70 hover:border-ember/30 hover:text-white transition-all cursor-default"
                >
                  <span className="font-bold text-sm" style={{ color: s.color }}>
                    {s.short}
                  </span>
                  {s.name}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={{ animation: "fadeUp 0.7s ease 0.3s both" }}
            >
              <a
                href="#work"
                className="btn-ember px-8 py-3.5 rounded text-sm font-body font-semibold text-white flex items-center gap-2 tracking-wide"
              >
                <Play size={15} fill="white" />
                View Work
              </a>
              <a
                href="#contact"
                className="btn-ghost px-8 py-3.5 rounded text-sm font-body font-semibold text-white flex items-center gap-2"
              >
                Hire Me
              </a>
            </div>

            {/* Mini stats */}
            <div
              className="flex gap-8 pt-8 border-t border-white/5"
              style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
            >
              {[
                { value: "50M+", label: "Views Generated" },
                { value: "3+", label: "Brand Partners" },
                { value: "48h", label: "Avg Turnaround" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl text-ember">
                    {s.value}
                  </div>
                  <div className="text-xs text-mist tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Video Carousel ── */}
          <div
            className="relative"
            style={{ animation: "fadeIn 0.9s ease 0.2s both" }}
          >
            {/* Frame decoration */}
            <div className="absolute -inset-3 rounded-2xl border border-ember/15 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-ember/10 rounded-full pointer-events-none" />

            {/* Video frame */}
            <div className="relative rounded-xl overflow-hidden bg-graphite aspect-[9/16] max-w-xs mx-auto lg:max-w-none shadow-2xl shadow-black/60">
              {/* Google Drive embed — key forces remount so each video auto-plays */}
              <iframe
                key={videos[active].id}
                src={`https://drive.google.com/file/d/${videos[active].id}/preview`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                style={{ border: "none" }}
                title={videos[active].title}
              />

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-ember transition-colors"
                aria-label="Previous video"
              >
                <ChevronLeft size={17} className="text-white" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-ember transition-colors"
                aria-label="Next video"
              >
                <ChevronRight size={17} className="text-white" />
              </button>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pointer-events-none">
                <p className="text-xs text-ember font-mono tracking-widest uppercase mb-0.5">
                  {videos[active].label}
                </p>
                <p className="text-sm font-body font-medium text-white">
                  {videos[active].title}
                </p>
              </div>

              {/* Counter badge (top-right) */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-white/70 border border-white/10">
                {active + 1} / {videos.length}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-ember"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-charcoal border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white font-mono">
                  Platform-Optimized Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#clients"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist/40 hover:text-mist transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}