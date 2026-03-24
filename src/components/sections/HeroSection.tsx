import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Star, Users, Award, Zap } from "lucide-react";

const STATS = [
  { value: "5+", label: "Years Teaching", icon: Award },
  { value: "200+", label: "Students Globally", icon: Users },
  { value: "A*", label: "Avg Grade Achieved", icon: Star },
];

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      {/* Deep background glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-[#3B82F6]/10 rounded-full blur-[120px] translate-x-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#10B981]/6 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59,130,246,0.04) 0%, transparent 60%),
                              radial-gradient(circle at 80% 80%, rgba(16,185,129,0.03) 0%, transparent 50%)`
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/12 text-[#3B82F6] text-xs font-semibold mb-8 border border-[#3B82F6]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Doctor of Physical Therapy · International Medical Tutor
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-3">
              Dr. Fatima Zahra
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Unlocking Academic{" "}
              <span className="text-[#3B82F6]">Excellence</span>{" "}
              in Sciences.
            </h2>

            <p className="text-base sm:text-lg text-white/55 mb-10 leading-relaxed max-w-lg">
              Conceptual online tutoring by a <span className="text-white/90 font-bold">Medical Doctor</span>. Expert guidance for{" "}
              <span className="text-white/90 font-bold">O/A Levels, IGCSE, GCSE</span> (AQA/CIE/Edexcel),{" "}
              <span className="text-white/90 font-bold">MCAT</span>, and <span className="text-white/90 font-bold">Medical Subjects</span>.
              5+ years of proven success helping international students achieve <span className="text-white/90 font-bold">A* grades</span>.
            </p>

            {/* Key feature pills — requirements highlight */}
            <div className="requirements-box rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-1.5">What You Get</p>
                  <div className="flex flex-wrap gap-2">
                    {["Free Demo Class", "Recorded Sessions", "Personalised Roadmap", "24/7 Support"].map((f) => (
                      <span key={f} className="text-xs font-medium text-white/70 bg-white/5 border border-white/8 rounded-lg px-2.5 py-1">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary-glow bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl px-7 py-3.5 text-[15px] transition-all active:scale-[0.97] flex items-center justify-center gap-2"
              >
                Schedule Free Demo
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("expertise")}
                className="text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 font-medium rounded-xl px-7 py-3.5 text-[15px] transition-all active:scale-[0.97]"
              >
                Explore Subjects
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-white leading-none">{value}</p>
                    <p className="text-xs text-white/40 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-[420px] mx-auto lg:ml-auto"
          >
            {/* Outer ambient glow — electric blue */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#3B82F6]/12 blur-3xl pointer-events-none" />
            {/* Secondary glow — softer warm tint */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-[#3B82F6]/6 blur-xl pointer-events-none" />

            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 32px 64px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.08)"
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/founder.jpg`}
                alt="Dr. Fatima Zahra — Medical Tutor"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="eager"
                decoding="async"
              />
              {/* Dark gradient fade — blends natural outdoor bg into the dark theme */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.15) 45%, transparent 70%)"
                }}
              />
              {/* Subtle vignette on sides */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 55%, rgba(15,23,42,0.35) 100%)"
                }}
              />
            </div>

            {/* Floating card: A* */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="absolute -bottom-5 -left-5 glass-panel rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#10B981]/15 flex items-center justify-center">
                  <span className="text-[#10B981] font-black text-base">A*</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">Proven Results</p>
                  <p className="text-xs text-white/40 mt-0.5">International Boards</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: boards */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
              className="absolute -top-4 -right-4 glass-panel rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5">
                  {["C", "A", "E"].map((l) => (
                    <div key={l} className="w-6 h-6 rounded-full bg-[#3B82F6] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-[#1E293B]">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">5 Curriculums</p>
                  <p className="text-[10px] text-white/40">CIE · AQA · Edexcel</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
