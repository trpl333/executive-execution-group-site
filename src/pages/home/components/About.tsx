import johnPhoto from "../../../assets/John.jpg";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#f8f9fa] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-6 h-px bg-slate-300" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <div className="relative w-full max-w-xs">
              <div className="w-full aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src={johnPhoto}
                  alt="John Peterson - Fractional EVP"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 left-0 w-12 h-px bg-[#1a2332]" />
            </div>

            <div className="mt-10">
              <p className="text-[16px] font-semibold text-[#1a2332] tracking-[-0.01em]">
                John Peterson
              </p>
              <p className="text-[13px] text-slate-400 mt-1 font-light">
                Fractional EVP &nbsp;·&nbsp; Executive Execution Group
              </p>
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

          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-[40px] md:text-[48px] font-light text-[#1a2332] leading-[1.05] tracking-[-0.02em] mb-10">
              About John Peterson
            </h2>

            <div className="space-y-6 text-[15px] text-slate-500 font-light leading-[1.85]">
              <p>
                John Peterson works with owner-led businesses as a Fractional EVP, helping them
                strengthen revenue, improve execution, and build the internal systems required for
                sustainable growth.
              </p>

              <p>
                His background spans executive leadership, sales performance, operational structure,
                and business development. He is brought in when a company has real opportunity but
                needs stronger accountability, better conversion, cleaner processes, and a business
                engine that does not depend entirely on the owner carrying everything on their back.
              </p>

              <p>
                John focuses on practical execution. He helps businesses tighten intake, improve
                follow-up, increase conversion, clarify priorities, and install the structure needed
                to scale with more consistency and less chaos.
              </p>

              <p>
                He is not a motivational coach and he is not a slide-deck consultant. He steps in as
                an operating partner to help fix what is underperforming, build what is missing, and
                create a stronger revenue system inside the business.
              </p>
            </div>

            <p className="text-[15px] text-[#1a2332] font-medium mt-8 leading-relaxed">
              Revenue. Systems. Execution.
            </p>

            <div className="grid grid-cols-3 gap-0 mt-12 pt-10 border-t border-slate-200">
              {[
                { label: "Focus", value: "Revenue Growth" },
                { label: "Model", value: "Fractional EVP" },
                { label: "Approach", value: "Hands-On Execution" },
              ].map((item, i) => (
                <div key={i} className={i > 0 ? "pl-6 border-l border-slate-200" : ""}>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.18em] font-medium mb-1">
                    {item.label}
                  </p>
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
