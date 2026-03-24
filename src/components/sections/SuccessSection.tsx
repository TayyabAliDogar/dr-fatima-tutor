import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    grade: "A*",
    subject: "A-Level Biology",
    text: "Dr. Fatima completely transformed how I approach Biology. Her medical background made complex physiological processes easy to visualise. I jumped from a C to an A* in just 6 months.",
    student: "Sarah M.",
    board: "Cambridge CIE",
    gradeColor: "text-[#10B981]",
    gradeBg: "bg-[#10B981]/10 border-[#10B981]/20",
  },
  {
    grade: "9",
    subject: "IGCSE Chemistry",
    text: "The conceptual clarity I gained was incredible. She doesn't just teach the syllabus — she teaches you how to think scientifically. Highly recommended for anyone aiming for top grades.",
    student: "Ahmed R.",
    board: "Edexcel",
    gradeColor: "text-[#3B82F6]",
    gradeBg: "bg-[#3B82F6]/10 border-[#3B82F6]/20",
  },
  {
    grade: "A*",
    subject: "O-Level Physics",
    text: "Her digital setup is flawless. It feels like she's right next to you. The recorded sessions were a lifesaver during my final exam prep. Wouldn't trust anyone else.",
    student: "Jessica T.",
    board: "AQA",
    gradeColor: "text-[#10B981]",
    gradeBg: "bg-[#10B981]/10 border-[#10B981]/20",
  },
];

const CURRICULUMS = [
  { name: "Cambridge (CIE)", abbr: "CIE" },
  { name: "AQA",             abbr: "AQA" },
  { name: "Edexcel",         abbr: "EDX" },
  { name: "IB",              abbr: "IB" },
  { name: "MCAT Pakistan",   abbr: "MCAT" },
];

export function SuccessSection() {
  return (
    <section id="success" className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">Student Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Proven Success Stories
          </h2>
          <p className="text-base text-white/50 leading-relaxed">
            A consistent track record of helping <span className="text-white/90 font-bold">international students</span> reach their <span className="text-white/90 font-bold">highest academic potential</span>.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="surface-card card-hover rounded-2xl p-7 flex flex-col cursor-default"
            >
              {/* Stars + grade */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className={`text-sm font-black px-2.5 py-1 rounded-lg border ${item.gradeBg} ${item.gradeColor}`}>
                  {item.grade}
                </span>
              </div>

              <Quote className="w-5 h-5 text-white/10 mb-3 flex-shrink-0" />
              <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1 italic">
                {item.text}
              </p>

              {/* Student info with zebra-style divider */}
              <div className="pt-5 border-t border-white/6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3B82F6] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.student.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90 leading-none">{item.student}</p>
                    <p className="text-xs text-white/35 mt-0.5">{item.subject} · {item.board}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curriculum trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-divider mb-10" />
          <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-8">
            Trusted Across Global Curriculums
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {CURRICULUMS.map((board) => (
              <div
                key={board.name}
                className="surface-card card-hover flex items-center gap-2.5 rounded-xl px-5 py-3 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/12 flex items-center justify-center">
                  <span className="text-[10px] font-black text-[#3B82F6]">{board.abbr}</span>
                </div>
                <span className="text-sm font-semibold text-white/75">{board.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
