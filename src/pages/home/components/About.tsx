export default function About() {
  return (
    <section id="about" className="w-full bg-[#f8f9fa] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left: Image */}
          <div className="lg:col-span-4">
            <div className="relative w-full max-w-xs">
              <div className="w-full aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src="https://readdy.ai/api/search-image?query=confident%20senior%20business%20executive%20man%20in%20dark%20charcoal%20suit%2C%20clean%20white%20studio%20background%2C%20sharp%20professional%20portrait%20photography%2C%20strong%20direct%20gaze%2C%20authoritative%20posture%2C%20premium%20corporate%20headshot%2C%20soft%20directional%20lighting%2C%20high%20contrast%2C%20sophisticated%20atmosphere%2C%20no%20distractions&width=600&height=800&seq=about002&orientation=portrait"
                  alt="John Peterson - Fractional EVP"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Thin accent line */}
              <div className="absolute -bottom-4 left-0 w-12 h-px bg-[#1a2332]" />
            </div>

            <div className="mt-10">
              <p className="text-[16px] font-semibold text-[#1a2332] tracking-[-0.01em]">John Peterson</p>
              <p className="text-[13px] text-slate-400 mt-1 font-light">Fractional EVP &nbsp;·&nbsp; Executive Execution Group</p>
              <a
                href="https://linkedin.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 mt-5 text-[12px] text-slate-400 hover:text-[#1a2332] transition-colors duration-200 cursor-pointer tracking-wide"
              >
                <i className="ri-linkedin-line text-base" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-[40px] md:text-[48px] font-light text-[#1a2332] leading-[1.05] tracking-[-0.02em] mb-10">
              About John Peterson
            </h2>

            <div className="space-y-6 text-[15px] text-slate-500 font-light leading-[1.85]">
              <p>
                John Peterson is a senior operator and revenue growth leader who works with owner-led service businesses as a Fractional EVP. His background spans executive leadership, sales system design, and operational performance — built across years of working inside businesses where execution, not strategy, was the differentiator.
              </p>
              <p>
                He has led revenue functions, rebuilt intake and conversion processes, and installed the operating infrastructure that allows businesses to grow without becoming more dependent on the owner. His work is practical, direct, and focused on measurable outcomes.
              </p>
              <p>
                John works with healthcare practices, medical businesses, and owner-led service companies that are ready to move from inconsistent performance to a structured, scalable business engine. He is not a coach. He is not a consultant. He is an operating partner who comes in to build what is missing and fix what is broken.
              </p>
            </div>

            <p className="text-[15px] text-[#1a2332] font-medium mt-8 leading-relaxed">
              His job is to strengthen the business engine so you can focus on your craft.
            </p>

            {/* Credentials bar */}
            <div className="grid grid-cols-3 gap-0 mt-12 pt-10 border-t border-slate-200">
              {[
                { label: "Focus", value: "Revenue Growth" },
                { label: "Model", value: "Fractional EVP" },
                { label: "Clients", value: "Healthcare & Service" },
              ].map((item, i) => (
                <div key={i} className={`${i > 0 ? "pl-6 border-l border-slate-200" : ""}`}>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.18em] font-medium mb-1">{item.label}</p>
                  <p className="text-[13px] font-semibold text-[#1a2332]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
