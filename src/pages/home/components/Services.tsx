const services = [
  {
    number: "01",
    title: "Acquisition Systems",
    short: "Predictable lead and referral flow.",
    desc: "Build a structured engine that generates new patients and clients consistently. Stop relying on word-of-mouth and hope. Create inbound flow that compounds.",
  },
  {
    number: "02",
    title: "Conversion Systems",
    short: "Intake, follow-up, and close rate.",
    desc: "Improve call handling, intake scripting, and lead-to-client conversion. Most practices convert far less than they should. We fix the process and the accountability.",
  },
  {
    number: "03",
    title: "Monetization Systems",
    short: "Revenue per client and per case.",
    desc: "Increase value per client through offers, packaging, memberships, and smarter revenue design. The revenue is already in your existing base — we help you capture it.",
  },
  {
    number: "04",
    title: "Retention Systems",
    short: "Rebooking, continuity, and LTV.",
    desc: "Improve rebooking rates, continuity programs, and lifetime value through systems and automation. Keeping a client is far cheaper than acquiring one.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#0f1a28] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-white/20" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/30">
            Our Work
          </span>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-[40px] md:text-[52px] font-light text-white leading-[1.05] tracking-[-0.02em]">
              What We Build
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[14px] text-white/35 leading-[1.75] font-light">
              Four interconnected systems. Each one addresses a specific revenue leak. Together, they form a complete business engine.
            </p>
          </div>
        </div>

        {/* Service rows — editorial list */}
        <div className="border-t border-white/8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 gap-6 md:gap-10 py-10 border-b border-white/8 hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
            >
              {/* Number */}
              <div className="col-span-1 flex items-start pt-1">
                <span className="text-[11px] font-medium text-white/20 tracking-widest">{s.number}</span>
              </div>

              {/* Title + short */}
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-[18px] font-semibold text-white tracking-[-0.01em] mb-2">{s.title}</h3>
                <p className="text-[12px] font-medium text-white/30 tracking-[0.06em] uppercase">{s.short}</p>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-start">
                <p className="text-[14px] text-white/45 leading-[1.75] font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
