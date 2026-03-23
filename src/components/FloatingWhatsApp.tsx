import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/message/DRFATIMAZAHRA"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Fatima on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-2xl shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 transition-all"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-semibold leading-none">Chat on WhatsApp</span>
    </motion.a>
  );
}
