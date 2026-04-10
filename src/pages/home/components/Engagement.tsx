const points = [
  {
    title: "Monthly Retainer",
    desc: "A structured, ongoing engagement with defined scope, deliverables, and executive oversight — not an open-ended hourly arrangement.",
  },
  {
    title: "Performance-Based Upside",
    desc: "Compensation is tied to outcomes. When the business grows, the engagement reflects that. Alignment is built into the structure from day one.",
  },
  {
    title: "Strategic Oversight",
    desc: "Regular operating reviews, performance tracking, and executive-level decision support — embedded in the business, not observing from the outside.",
  },
  {
    title: "System Design and Implementation",
    desc: "We do not produce reports. We build and install the systems, train the team, and ensure the infrastructure is operational and producing results.",
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="w-full bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
            Working Together
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div className="lg:col-span-4">
            <h2 className="text-[40px] md:text-[48px] font-light text-[#1a2332] leading-[1.05] tracking-[-0.02em] mb-8">
              Engagement Model
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.8] font-light mb-6">
              This is not a coaching program or a consulting retainer where you receive a slide deck and a follow-up call. This is an operating partnership — structured for execution, accountability, and measurable business growth.
            </p>
            <p className="text-[15px] text-slate-500 leading-[1.8] font-light">
              Engagements are selective. I work with a limited number of businesses at a time to ensure the depth of focus each client requires.
            </p>
          </div>

          {/* Right: Points as clean rows */}
          <div className="lg:col-span-7 lg:col-start-6 border-t border-slate-100">
            {points.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-6 py-8 border-b border-slate-100"
              >
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-[14px] font-semibold text-[#1a2332] tracking-[-0.01em]">{p.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-[14px] text-slate-500 leading-[1.75] font-light">{p.desc}</p>
                </div>
              </div>
            ))}

            {/* Closing note */}
            <div className="pt-8">
              <p className="text-[13px] text-slate-400 font-light leading-[1.7] italic">
                Engagements begin with a 30-minute strategy session. If there is a fit, we define scope and begin within two weeks.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
