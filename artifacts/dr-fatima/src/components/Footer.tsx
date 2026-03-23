import { ArrowUp, GraduationCap, Mail, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { name: "Home",           href: "#home" },
  { name: "The Advantage",  href: "#advantage" },
  { name: "Expertise",      href: "#expertise" },
  { name: "Methodology",    href: "#methodology" },
  { name: "Success Stories",href: "#success" },
  { name: "Contact",        href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "hsl(222 47% 5%)" }} className="border-t border-white/5">
      {/* Top divider glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/25">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-none">Dr. Fatima Zahra</p>
                <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-widest">Medical Tutor</p>
              </div>
            </div>
            <p className="text-sm text-white/35 leading-relaxed mb-6">
              International Science & Medical Tutor. Doctor of Physical Therapy. Helping students achieve A* grades across global curriculums.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-xs font-semibold text-[#3B82F6]">
              Free demo classes available
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-5">Contact</p>
            <div className="space-y-4">
              <a
                href="mailto:fatimazehra.work@gmail.com"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center group-hover:border-[#3B82F6]/30 group-hover:bg-[#3B82F6]/8 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                fatimazehra.work@gmail.com
              </a>
              <a
                href="https://wa.me/message/DRFATIMAZAHRA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Dr. Fatima on WhatsApp"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/8 transition-all">
                  <MessageCircle className="w-4 h-4" />
                </div>
                WhatsApp — Instant Reply
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Dr. Fatima Zahra. All rights reserved. Conceptual Excellence in Science Education.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/4 border border-white/6 hover:bg-white/8 hover:border-white/10 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-white/35" />
          </button>
        </div>
      </div>
    </footer>
  );
}
