export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "The Problem", id: "problem" },
    { label: "What We Build", id: "services" },
    { label: "How I Work", id: "how" },
    { label: "Results", id: "results" },
    { label: "About", id: "about" },
  ];

  return (
    <footer className="w-full bg-[#080e16] py-14">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/[0.06]">

          {/* Brand */}
          <div>
            <img
              src="https://public.readdy.ai/ai/img_res/ae5b10b2-5060-4549-8fc1-09c082951447.png"
              alt="Executive Execution Group"
              className="h-7 w-auto object-contain mb-5 brightness-0 invert opacity-40"
            />
            <p className="text-[12px] text-white/25 font-light">John Peterson &nbsp;·&nbsp; Fractional EVP</p>
            <p className="text-[10px] text-white/15 font-medium tracking-[0.2em] uppercase mt-1">
              Revenue. Systems. Execution.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[12px] text-white/25 hover:text-white/50 transition-colors duration-200 cursor-pointer tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/20 mb-1">Contact</p>
            <a
              href="mailto:john@executiveexecutiongroup.com"
              className="text-[12px] text-white/25 hover:text-white/50 transition-colors duration-200"
              rel="nofollow"
            >
              john@executiveexecutiongroup.com
            </a>
            <a
              href="https://linkedin.com"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 text-[12px] text-white/25 hover:text-white/50 transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-linkedin-line" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Executive Execution Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
