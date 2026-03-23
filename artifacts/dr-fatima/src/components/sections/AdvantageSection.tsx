import { motion } from "framer-motion";
import { Stethoscope, Award, Globe, Brain } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Medical Expertise",
    description: "Doctor of Physical Therapy (Govt University). A clinically-trained understanding of Biology and Sciences far beyond any standard tutor.",
    icon: Stethoscope,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
    glow: "shadow-[#3B82F6]/10",
  },
  {
    title: "5+ Years Experience",
    description: "Extensive track record guiding international students through rigorous exams to consistently top-tier results.",
    icon: Award,
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#10B981]/10",
    glow: "shadow-[#10B981]/10",
  },
  {
    title: "International Specialist",
    description: "Deep mastery of global curriculums: Cambridge (CIE), AQA, Edexcel, IB, and MCAT Pakistan.",
    icon: Globe,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
    glow: "shadow-[#3B82F6]/10",
  },
  {
    title: "Conceptual Learning",
    description: "We build foundational scientific logic — not rote memorisation — guaranteeing long-term retention and real exam confidence.",
    icon: Brain,
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#10B981]/10",
    glow: "shadow-[#10B981]/10",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function AdvantageSection() {
  return (
    <section id="advantage" className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 9%)" }}>
      {/* Top divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#3B82F6]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-3">Why Dr. Fatima</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            The Doctor's Advantage
          </h2>
          <p className="text-base text-white/50 leading-relaxed">
            Why choose a standard tutor when you can learn from a medical professional? Experience the profound difference of clinically-informed science education.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="surface-card card-hover rounded-2xl p-7 cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
