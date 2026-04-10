const steps = [
  {
    number: "01",
    phase: "Diagnostic",
    title: "Identify the Leak",
    desc: "Before building anything, we find where revenue is being lost. We audit acquisition, conversion, and retention performance — not from a spreadsheet, but from inside the business. Most owners are surprised by what we find.",
    note: "This is not a generic assessment. It is a focused diagnostic by someone who has operated at the executive level and knows exactly where service businesses lose money.",
  },
  {
    number: "02",
    phase: "Implementation",
    title: "Build the System",
    desc: "Once we know the gaps, we build the infrastructure to close them. Documented processes, trained teams, clear accountability, and the right tools in place — not recommendations that sit in a deck.",
    note: "I do not hand you a strategy and leave. I work alongside your team to implement, install, and activate the systems that drive performance.",
  },
  {
    number: "03",
    phase: "Execution",
    title: "Optimize Performance",
    desc: "Systems without oversight decay. We establish operating rhythms, performance metrics, and regular reviews to ensure the business continues to improve — and that results compound over time.",
    note: "This is where the Fractional EVP model earns its value. Ongoing strategic oversight, accountability, and refinement — without the cost of a full-time executive.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how" className="w-full bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
            The Process
          </span>
        </div>

        {/* Headline row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-[40px] md:text-[52px] font-light text-[#1a2332] leading-[1.05] tracking-[-0.02em]">
              How I Work
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[14px] text-slate-400 leading-[1.75] font-light">
              This is executive-level business leadership — not consulting. The difference is that I am accountable for execution, not just advice.
            </p>
          </div>
        </div>

        {/* Steps — editorial rows */}
        <div className="border-t border-slate-100">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-6 md:gap-10 py-12 border-b border-slate-100"
            >
              {/* Phase + number */}
              <div className="col-span-12 md:col-span-1 flex md:flex-col items-start gap-3 md:gap-2">
                <span className="text-[11px] font-medium text-slate-200 tracking-widest">{step.number}</span>
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-300 md:mt-1">{step.phase}</span>
              </div>

              {/* Title */}
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-[22px] font-semibold text-[#1a2332] tracking-[-0.01em] leading-snug">{step.title}</h3>
              </div>

              {/* Description + note */}
              <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-5">
                <p className="text-[15px] text-slate-600 leading-[1.75] font-light">{step.desc}</p>
                <p className="text-[13px] text-slate-400 leading-[1.7] font-light pl-4 border-l border-slate-200 italic">
                  {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 pt-2">
          <p className="text-[18px] md:text-[22px] text-slate-500 font-light leading-[1.6] max-w-3xl tracking-[-0.01em]">
            Most owners have tried agencies, coaches, and consultants. What they have not had is a senior operator embedded in the business — someone accountable for revenue performance, not just advice.{" "}
            <span className="text-[#1a2332] font-medium">That is what a Fractional EVP delivers.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
