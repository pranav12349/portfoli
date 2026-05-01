import Navbar from "@/Navbar";
import Hero from "@/Hero";
import Clients from "@/Clients";
import Results from "@/Results";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Results />

      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="py-28 bg-obsidian relative overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ember/8 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="line-deco" />
              <span className="text-xs font-mono text-ember tracking-widest uppercase">
                Let&apos;s Work
              </span>
              <span className="line-deco" />
            </div>

            <h2 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] text-white tracking-wide mb-6 leading-none">
              READY TO GO{" "}
              <span className="text-ember">VIRAL?</span>
            </h2>

            <p className="text-mist text-base font-body leading-relaxed max-w-lg mx-auto">
              Tell me about your project — I&apos;ll get back to you within 24 hours
              with ideas and a quote.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:pranavteja0407@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-graphite border border-white/8 hover:border-ember/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-ember/10 border border-ember/20 flex items-center justify-center shrink-0 group-hover:bg-ember/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8572a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-mono text-mist/50 tracking-widest uppercase mb-0.5">Email</p>
                <p className="text-sm text-white font-body group-hover:text-ember transition-colors">pranavteja0407@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919490977797"
              className="flex items-center gap-4 p-4 rounded-xl bg-graphite border border-white/8 hover:border-ember/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-ember/10 border border-ember/20 flex items-center justify-center shrink-0 group-hover:bg-ember/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8572a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-mono text-mist/50 tracking-widest uppercase mb-0.5">Phone / WhatsApp</p>
                <p className="text-sm text-white font-body group-hover:text-ember transition-colors">+91 94909 77797</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/xaqvnezg"
            method="POST"
            className="flex flex-col gap-4 text-left"
          >
            {/* Hidden field to route submissions to the correct email */}
             <input type="email" name="email" placeholder="Your Email" required />
            <input type="hidden" name="_subject" value="New Portfolio Inquiry from Website" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-mist/60 tracking-widest uppercase mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Alex Creator"
                  className="w-full bg-graphite border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder:text-mist/30 font-body outline-none focus:border-ember/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-mist/60 tracking-widest uppercase mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@brand.com"
                  className="w-full bg-graphite border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder:text-mist/30 font-body outline-none focus:border-ember/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-mist/60 tracking-widest uppercase mb-1.5 block">
                Project Type
              </label>
              <select
                name="project_type"
                className="w-full bg-graphite border border-white/8 rounded-lg px-4 py-3 text-sm text-white font-body outline-none focus:border-ember/50 transition-colors appearance-none"
              >
                <option value="">Select a service...</option>
                <option value="reels">Reels / TikTok / Shorts</option>
                <option value="youtube">YouTube Long-form</option>
                <option value="ads">Performance Ads</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-mist/60 tracking-widest uppercase mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your brand, goals, and what you need..."
                className="w-full bg-graphite border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder:text-mist/30 font-body outline-none focus:border-ember/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-ember w-full py-4 rounded-lg text-sm font-body font-semibold text-white tracking-wide mt-2"
            >
              Send Message →
            </button>
          </form>

          <p className="text-xs text-mist/30 font-mono mt-6 tracking-wide text-center">
            Usually replies within 24h · Or reach out directly at{" "}
            <span className="text-ember/60">+91 94909 77797</span>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </section>

      {/* ── Footer ── */}
      <footer className="bg-charcoal border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2">
            <span className="w-6 h-6 bg-ember rounded-sm flex items-center justify-center text-xs font-display text-white">
              PT
            </span>
            <span className="font-display text-lg tracking-widest text-white">
              PRANAV<span className="text-ember">.</span>
            </span>
          </a>
          <p className="text-xs text-mist/40 font-mono tracking-wide">
            © {new Date().getFullYear()} Pranav Teja. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Results", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs text-mist/50 hover:text-ember transition-colors font-mono tracking-wide"
              >
                {l}
              </a>
            ))}
            <a
              href="mailto:pranavteja0407@gmail.com"
              className="text-xs text-mist/50 hover:text-ember transition-colors font-mono tracking-wide"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
