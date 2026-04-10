import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer">
          <img
            src="https://public.readdy.ai/ai/img_res/ae5b10b2-5060-4549-8fc1-09c082951447.png"
            alt="Executive Execution Group"
            className={`h-9 w-auto object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                scrolled ? "text-slate-500 hover:text-[#1a2332]" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className={`ml-2 px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
              scrolled
                ? "bg-[#1a2332] text-white hover:bg-[#0f1a28]"
                : "bg-white text-[#1a2332] hover:bg-white/90"
            }`}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px transition-all duration-200 ${scrolled ? "bg-[#1a2332]" : "bg-white"}`} />
          <span className={`block w-5 h-px transition-all duration-200 ${scrolled ? "bg-[#1a2332]" : "bg-white"}`} />
          <span className={`block w-5 h-px transition-all duration-200 ${scrolled ? "bg-[#1a2332]" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-8 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-[13px] font-medium text-slate-500 hover:text-[#1a2332] cursor-pointer tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="mt-2 px-6 py-3 bg-[#1a2332] text-white text-[13px] font-semibold cursor-pointer whitespace-nowrap text-center tracking-wide"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}
