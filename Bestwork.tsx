"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play, ExternalLink } from "lucide-react";

const categories = ["All", "Reels", "YouTube", "Ads"];

const works = [
  {
    id: 1,
    title: "Brand Reel — Product Launch",
    category: "Reels",
    thumb: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    views: "2.1M views",
    platform: "Instagram",
    client: "Inkvia",
    link: "#",
  },
  {
    id: 2,
    title: "Creator Highlight Reel",
    category: "Reels",
    thumb: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80",
    views: "850K views",
    platform: "TikTok",
    client: "DigiDifference",
    link: "#",
  },
  {
    id: 3,
    title: "YouTube Documentary Edit",
    category: "YouTube",
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    views: "400K views",
    platform: "YouTube",
    client: "Media House",
    link: "#",
  },
  {
    id: 4,
    title: "Performance Ad — E-commerce",
    category: "Ads",
    thumb: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    views: "High CTR",
    platform: "Meta Ads",
    client: "Inkvia",
    link: "#",
  },
  {
    id: 5,
    title: "Travel Vlog Long-form",
    category: "YouTube",
    thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80",
    views: "290K views",
    platform: "YouTube",
    client: "Media House",
    link: "#",
  },
  {
    id: 6,
    title: "Brand Story Ad",
    category: "Ads",
    thumb: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    views: "3.2x ROAS",
    platform: "Instagram Ads",
    client: "DigiDifference",
    link: "#",
  },
];

export default function BestWork() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? works : works.filter((w) => w.category === activeTab);

  // Re-run scroll reveal whenever the filtered list changes
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    // Small delay lets React flush the new DOM nodes
    const id = setTimeout(() => {
      const targets = document.querySelectorAll<HTMLElement>(
        ".reveal:not(.is-visible), .reveal-left:not(.is-visible)"
      );
      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(id);
  }, [filtered]);

  return (
    <section id="work" className="py-28 bg-obsidian relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ember/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="line-deco" />
              <span className="text-xs font-mono text-ember tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white tracking-wide">
              BEST WORK
            </h2>
          </div>
          <p className="text-mist text-sm max-w-xs font-body leading-relaxed md:text-right">
            Handpicked edits. Every frame has a purpose.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`tab-btn px-5 py-2 rounded text-sm font-body font-medium tracking-wide transition-all ${
                activeTab === cat
                  ? "bg-ember text-white"
                  : "bg-graphite text-mist hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((work, i) => (
            <div
              key={work.id}
              className="reveal video-card rounded-xl overflow-hidden bg-graphite border border-white/5 group relative"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={work.thumb}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="video-overlay absolute inset-0 bg-black/60 flex items-center justify-center">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-ember flex items-center justify-center shadow-lg shadow-ember/30 transition-transform hover:scale-110"
                    aria-label={`Watch ${work.title}`}
                  >
                    <Play size={20} fill="white" className="text-white ml-1" />
                  </a>
                </div>

                {/* Platform badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono text-white/70 border border-white/10">
                  {work.platform}
                </div>

                {/* Category */}
                <div className="absolute top-3 right-3 bg-ember/90 px-2.5 py-1 rounded text-xs font-mono text-white">
                  {work.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-body font-medium text-white text-sm leading-tight">
                    {work.title}
                  </h3>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mist/40 hover:text-ember transition-colors shrink-0"
                    aria-label="Open work"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-mono text-ember">{work.views}</span>
                  <span className="text-mist/20">·</span>
                  <span className="text-xs text-mist/50 font-mono">{work.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-14">
          <a
            href="#contact"
            className="btn-ember inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm font-body font-semibold text-white"
          >
            <Play size={14} fill="white" />
            Let's Make Your Next Video
          </a>
        </div>
      </div>
    </section>
  );
}