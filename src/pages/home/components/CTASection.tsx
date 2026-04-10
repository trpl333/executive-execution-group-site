interface CTASectionProps {
  onBookCall: () => void;
}

export default function CTASection({ onBookCall }: CTASectionProps) {
  return (
    <section id="cta" className="w-full bg-[#0f1a28] py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left: Headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-6 h-px bg-white/20" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/25">
                Let&apos;s Talk
              </span>
            </div>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.08] tracking-[-0.02em]">
              If your business is ready<br className="hidden md:block" /> for stronger execution,
              <span className="block text-white/35 mt-1">let&apos;s talk.</span>
            </h2>
          </div>

          {/* Right: CTA block */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
            <p className="text-[14px] text-white/40 font-light leading-[1.75]">
              A 30-minute session to identify where your business is losing revenue and what it would take to fix it. No pitch. No pressure. A direct conversation.
            </p>
            <button
              onClick={onBookCall}
              className="w-full py-5 bg-white text-[#1a2332] text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-slate-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Book a Strategy Call
            </button>
            <p className="text-[11px] text-white/20 tracking-[0.1em] text-center">
              30 minutes &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; Limited availability
            </p>
          </div>

        </div>

        {/* Bottom rule + tagline */}
        <div className="mt-20 pt-10 border-t border-white/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/15">
            Revenue.&nbsp;&nbsp;Systems.&nbsp;&nbsp;Execution.
          </p>
          <p className="text-[11px] text-white/15 tracking-wide">
            Executive Execution Group &nbsp;·&nbsp; John Peterson, Fractional EVP
          </p>
        </div>
      </div>
    </section>
  );
}
