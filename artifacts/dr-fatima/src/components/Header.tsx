import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "home" },
  { name: "Expertise", href: "expertise" },
  { name: "Methodology", href: "methodology" },
  { name: "Curriculums", href: "success" },
  { name: "Contact", href: "contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent border-b border-transparent py-5"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            className="flex items-center gap-3 group"
            aria-label="Dr. Fatima Zahra — Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-base font-bold tracking-tight text-white block">Dr. Fatima Zahra</span>
              <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest hidden sm:block">Medical Tutor</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                  active === link.href
                    ? "nav-link-active"
                    : "text-white/55 hover:text-white/90 hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary-glow bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-all active:scale-[0.97]"
            >
              Book a Free Demo Class
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute top-full left-0 right-0 glass-nav shadow-2xl overflow-hidden"
          >
            <nav className="px-4 py-5 space-y-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/8 mt-2">
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-primary-glow w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl py-3 text-sm transition-all active:scale-[0.97]"
                >
                  Book a Free Demo Class
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
