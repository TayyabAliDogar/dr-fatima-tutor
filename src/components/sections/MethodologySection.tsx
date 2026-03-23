import { motion } from "framer-motion";
import { MonitorPlay, PenTool, BatteryCharging, Wifi, FileVideo, CheckCircle2 } from "lucide-react";

const FEATURES = [
  { icon: PenTool,        title: "Interactive Digital Whiteboard", desc: "Real-time annotation using a professional stylus pen for precise scientific diagrams.", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10" },
  { icon: MonitorPlay,    title: "HD Visual Aids & 3D Models",     desc: "Crystal-clear animations and 3D renderings to visualise complex biological and chemical processes.", color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
  { icon: BatteryCharging,title: "24/7 Power Backup",              desc: "Uninterrupted sessions guaranteed with enterprise-grade power redundancy systems.", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" },
  { icon: Wifi,           title: "Internet Redundancy",            desc: "Dual high-speed fibre connections ensuring zero lag or drops during class.", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10" },
  { icon: FileVideo,      title: "Session Recordings",             desc: "Every class is fully recorded and shared — perfect for revision at your own pace.", color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
];

const PLATFORMS = ["Zoom", "Google Meet", "Microsoft Teams", "Skype"];

const GUARANTEES = [
  "Zero technical cancellations in 5+ years",
  "Session recording shared within 2 hours",
  "Dedicated revision material after every class",
  "24-hour response to all student queries",
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 9%)" }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#10B981]/6 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">Our Methodology</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Modern Learning,<br />Global Reach.
            </h2>
            <p className="text-base text-white/50 mb-10 leading-relaxed">
              Designed for international parents who demand absolute reliability. Our digital infrastructure rivals modern classrooms — because distance should never compromise the quality of education.
            </p>

            <div className="space-y-5">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className={`mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center`}>
                    <f.icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90 mb-0.5">{f.title}</p>
                    <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Platform card */}
            <div className="surface-card rounded-2xl p-7">
              <p className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">Platform Agnostic</p>
              <div className="grid grid-cols-2 gap-3">
                {PLATFORMS.map((p) => (
                  <div key={p} className="flex items-center gap-2.5 bg-white/4 border border-white/6 rounded-xl px-4 py-3 hover:border-white/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span className="text-sm font-medium text-white/70">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements / guarantee box — highlighted with left accent */}
            <div className="requirements-box rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Requirements & Reliability</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Our Reliability Promise</p>
                </div>
              </div>
              <ul className="space-y-3">
                {GUARANTEES.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth highlight */}
            <div className="emerald-box rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-[#10B981] font-black text-base">A*</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#10B981] uppercase tracking-widest mb-0.5">Growth Indicator</p>
                <p className="text-sm text-white/65">Students consistently improve by 2+ grade boundaries within 3 months.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
