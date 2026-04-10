interface HeroProps {
  onBookCall: () => void;
  onSeeHow: () => void;
}

export default function Hero({ onBookCall, onSeeHow }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=ultra%20premium%20executive%20boardroom%20interior%2C%20dark%20charcoal%20walls%2C%20long%20conference%20table%2C%20floor%20to%20ceiling%20windows%20with%20city%20view%20at%20dusk%2C%20dramatic%20directional%20lighting%2C%20deep%20navy%20and%20slate%20tones%2C%20architectural%20minimalism%2C%20high%20end%20corporate%20environment%2C%20cinematic%20atmosphere%2C%20no%20people&width=1920&height=1080&seq=hero002&orientation=landscape"
          alt="Executive boardroom"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0d1520]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-transparent to-transparent opacity-60" />
      </div>

      {/* Thin top rule */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 pt-28 pb-24">
        <div className="max-w-[680px]">

          {/* Eyebrow label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-6 h-px bg-white/30" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40">
              Executive Execution Group
            </span>
          </div>

          {/* Name + Title */}
          <div className="mb-10">
            <h1 className="text-[64px] md:text-[80px] lg:text-[96px] font-extralight text-white leading-[0.95] tracking-[-0.02em]">
              John
              <br />
              Peterson
            </h1>
            <div className="flex items-center gap-4 mt-5">
              <span className="block w-6 h-px bg-white/20" />
              <p className="text-[13px] font-medium tracking-[0.18em] uppercase text-white/50">
                Fractional EVP
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-10" />

          {/* Value proposition */}
          <p className="text-[22px] md:text-[26px] text-white/80 font-light leading-[1.45] mb-5 tracking-[-0.01em]">
            I build revenue systems inside your business<br className="hidden md:block" /> so you can focus on what you do best.
          </p>

          <p className="text-[15px] text-white/45 font-light tracking-wide mb-14">
            More leads.&nbsp;&nbsp;Better conversion.&nbsp;&nbsp;Higher revenue per client.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={onBookCall}
              className="px-9 py-4 bg-white text-[#1a2332] text-[13px] font-bold tracking-[0.06em] uppercase hover:bg-slate-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Book a Strategy Call
            </button>
            <button
              onClick={onSeeHow}
              className="px-9 py-4 border border-white/20 text-white/60 text-[13px] font-medium tracking-[0.06em] uppercase hover:border-white/40 hover:text-white/80 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              See How I Work
            </button>
          </div>

          {/* Tagline */}
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/20 mt-12">
            Revenue.&nbsp;&nbsp;Systems.&nbsp;&nbsp;Execution.
          </p>
        </div>
      </div>

      {/* Scroll cue — minimal line */}
      <div className="absolute bottom-10 left-8 md:left-12 flex flex-col items-start gap-3">
        <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase font-medium">Scroll</span>
        <span className="block w-px h-10 bg-white/15" />
      </div>
    </section>
  );
}
