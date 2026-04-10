const focusAreas = [
  "New patient and client acquisition systems",
  "Stronger intake and lead-to-client conversion",
  "Higher value per case through packaging and offers",
  "Retention, rebooking, and continuity programs",
];

const metrics = [
  { value: "30–60%", label: "Conversion lift" },
  { value: "+25%", label: "Revenue per client" },
  { value: "+40%", label: "Retention rate" },
];

export default function Results() {
  return (
    <section id="results" className="w-full bg-[#f8f9fa] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
            Results
          </span>
        </div>

        {/* Headline */}
        <div className="mb-20">
          <h2 className="text-[40px] md:text-[52px] font-light text-[#1a2332] leading-[1.05] tracking-[-0.02em] max-w-2xl">
            What This Looks Like in Practice
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Growth model */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 p-10">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-10">
                Representative Growth Model
              </p>

              {/* Revenue figures */}
              <div className="space-y-0 mb-10">
                <div className="py-6 border-b border-slate-100">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-slate-400 mb-2">Practice Revenue Today</p>
                  <p className="text-[42px] font-light text-[#1a2332] tracking-[-0.02em] leading-none">$450K</p>
                </div>
                <div className="py-6 border-b border-slate-100">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-slate-400 mb-2">Growth Objective</p>
                  <p className="text-[42px] font-light text-[#1a2332] tracking-[-0.02em] leading-none">$650K<span className="text-slate-300">+</span></p>
                </div>
              </div>

              {/* Focus areas */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-5">Focus Areas</p>
                <ul className="space-y-3">
                  {focusAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="block w-3 h-px bg-slate-300 mt-[9px] flex-shrink-0" />
                      <span className="text-[13px] text-slate-600 font-light leading-[1.6]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10">

            <div>
              <h3 className="text-[24px] md:text-[28px] font-light text-[#1a2332] leading-[1.3] tracking-[-0.01em] mb-5">
                Growth comes from fixing execution — not adding more marketing.
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.8] font-light">
                The gap between $450K and $650K is rarely a traffic problem. It is a conversion problem, a retention problem, and a monetization problem. Most practices are already generating enough leads — they are just not capturing the full value of what comes through the door.
              </p>
            </div>

            {/* Pull quote */}
            <div className="py-8 border-t border-b border-slate-200">
              <p className="text-[16px] text-slate-600 leading-[1.75] font-light italic">
                &ldquo;Before spending another dollar on advertising, fix the systems that convert and retain the leads you already have. That is where the fastest revenue growth lives.&rdquo;
              </p>
              <p className="text-[12px] text-[#1a2332] font-semibold mt-4 tracking-[0.04em]">
                — John Peterson, Fractional EVP
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-0 border border-slate-100">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className={`p-6 text-center ${i < metrics.length - 1 ? "border-r border-slate-100" : ""}`}
                >
                  <p className="text-[28px] font-light text-[#1a2332] tracking-[-0.02em] leading-none mb-2">{m.value}</p>
                  <p className="text-[11px] text-slate-400 font-medium tracking-[0.08em] uppercase">{m.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
