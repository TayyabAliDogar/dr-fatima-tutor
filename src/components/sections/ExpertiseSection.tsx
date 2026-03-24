import { motion } from "framer-motion";
import { Microscope, Atom, HeartPulse, Beaker, BookOpen, Activity, ChevronRight } from "lucide-react";

const SUBJECTS = [
  {
    category: "Core Sciences",
    level: "Grades 1–8 · O-Level · IGCSE",
    badge: "Foundation",
    badgeStyle: "text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20",
    accentBar: "bg-[#3B82F6]",
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
    items: [
      { name: "Biology", icon: Microscope, desc: "Foundational life sciences with clarity and visual depth." },
      { name: "Physics", icon: Atom, desc: "Demystifying mechanics, energy, and waves with real-world context." },
      { name: "Chemistry", icon: Beaker, desc: "Mastering reactions, bonding, and periodic trends step by step." },
    ],
  },
  {
    category: "Advanced Sciences",
    level: "A-Level · Specialist Track",
    badge: "Advanced",
    badgeStyle: "text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20",
    accentBar: "bg-[#10B981]",
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#10B981]/10",
    items: [
      { name: "A-Level Biology", icon: Microscope, desc: "In-depth cellular, systemic, and genetic biology for top exam boards." },
      { name: "A-Level Chemistry", icon: Beaker, desc: "Advanced organic, inorganic, and physical chemistry concepts." },
    ],
  },
  {
    category: "Medical Subjects",
    level: "University · MCAT · Clinical Prep",
    badge: "Premium",
    badgeStyle: "text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20",
    accentBar: "bg-[#F59E0B]",
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#F59E0B]/10",
    items: [
      { name: "MCAT Preparation", icon: BookOpen, desc: "Strategic, high-yield preparation for medical university entry." },
      { name: "Anatomy & Physiology", icon: HeartPulse, desc: "Clinical-grade structural understanding of the human body." },
      { name: "Kinesiology", icon: Activity, desc: "Biomechanics and human movement from a medical lens." },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const colVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ExpertiseSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="expertise" className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(59,130,246,0.05) 0%, transparent 55%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">What We Teach</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              Expertise & Subjects
            </h2>
            <p className="text-base text-white/50 max-w-xl leading-relaxed">
              Comprehensive tutoring across all major <span className="text-white/90 font-bold">international examination boards</span>, delivering absolute clarity and <span className="text-white/90 font-bold">peak academic performance</span>.
            </p>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors whitespace-nowrap group"
          >
            Book a session
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SUBJECTS.map((group) => (
            <motion.div
              key={group.category}
              variants={colVariants}
              className="flex flex-col"
            >
              {/* Column header */}
              <div className="mb-5 pb-5 border-b border-white/6">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-1.5 h-5 rounded-full ${group.accentBar}`} />
                    <h3 className="text-base font-extrabold text-white">{group.category}</h3>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${group.badgeStyle}`}>
                    {group.badge}
                  </span>
                </div>
                <p className="text-xs text-white/35 font-medium ml-4">{group.level}</p>
              </div>

              {/* Subject cards */}
              <div className="space-y-3 flex-1">
                {group.items.map((subject) => (
                  <div
                    key={subject.name}
                    className="surface-card card-hover group flex items-start gap-4 rounded-xl p-4 cursor-default"
                  >
                    <div className={`mt-0.5 w-9 h-9 rounded-lg flex-shrink-0 ${group.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <subject.icon className={`${group.iconColor}`} style={{ width: 18, height: 18 }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white/90 mb-0.5 leading-snug">{subject.name}</p>
                      <p className="text-xs text-white/40 leading-relaxed">{subject.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
