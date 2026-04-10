const problems = [
  {
    label: "01",
    title: "Inconsistent lead flow",
    desc: "Some months are strong. Others are not. There is no reliable system generating new patients or clients — just hope and word-of-mouth.",
  },
  {
    label: "02",
    title: "Missed calls and weak intake",
    desc: "Leads come in but do not convert. The front desk is not trained to close. Follow-up is inconsistent at best.",
  },
  {
    label: "03",
    title: "Poor follow-up",
    desc: "Prospects fall through the cracks. No structured sequence. No accountability. Revenue walks out the door every week.",
  },
  {
    label: "04",
    title: "Under-monetized clients",
    desc: "Significant revenue is being left on the table. Clients are not being offered the full value of what you provide.",
  },
  {
    label: "05",
    title: "Too much owner dependence",
    desc: "The business runs on you. If you step back, things slow down. That is not a business — that is a job.",
  },
  {
    label: "06",
    title: "No systems or accountability",
    desc: "Things get done when someone remembers to do them. No operating rhythm. No scoreboard. No structure.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="w-full bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
            The Real Problem
          </span>
        </div>

        {/* Headline block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-light text-[#1a2332] leading-[1.1] tracking-[-0.02em]">
              Most businesses do not have a volume problem.
            </h2>
            <p className="text-[36px] md:text-[44px] lg:text-[52px] font-light text-slate-300 leading-[1.1] tracking-[-0.02em] mt-1">
              They have an execution problem.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[16px] text-slate-500 leading-[1.75] font-light">
              The owners I work with are skilled at what they do. They are not failing because of a lack of talent or effort. They are failing to grow because the business engine — the systems that generate, convert, and retain revenue — is broken or missing entirely.
            </p>
          </div>
        </div>

        {/* Problem list — editorial table style */}
        <div className="border-t border-slate-100">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 gap-6 md:gap-10 py-7 border-b border-slate-100 hover:bg-slate-50/50 transition-colors duration-200 cursor-default"
            >
              {/* Number */}
              <div className="col-span-1 flex items-start pt-0.5">
                <span className="text-[11px] font-medium text-slate-300 tracking-widest">{p.label}</span>
              </div>
              {/* Title */}
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-[15px] font-semibold text-[#1a2332] tracking-[-0.01em]">{p.title}</h3>
              </div>
              {/* Description */}
              <div className="col-span-12 md:col-span-7">
                <p className="text-[14px] text-slate-500 leading-[1.7] font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
