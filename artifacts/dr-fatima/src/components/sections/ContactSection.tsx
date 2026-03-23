import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData, useSubmitContact } from "@/hooks/use-contact";

export function ContactSection() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Message Sent!", description: "Dr. Fatima will get back to you within 24 hours." });
        form.reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Sending failed",
          description: "Please try again or reach out via WhatsApp.",
        });
      },
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 9%)" }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5">
              Ready to secure an A*?
            </h2>
            <p className="text-base text-white/50 mb-10 leading-relaxed">
              Book a free 30-minute demo class to experience the methodology firsthand. Discuss your academic goals and build a personalised roadmap to success.
            </p>

            <div className="space-y-3 mb-10">
              <a
                href="mailto:fatimazehra.work@gmail.com"
                className="group flex items-center gap-4 surface-card rounded-xl p-4 card-hover"
              >
                <div className="w-11 h-11 bg-[#3B82F6]/12 rounded-xl flex items-center justify-center group-hover:bg-[#3B82F6]/20 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/35 mb-0.5">Direct Email</p>
                  <p className="text-sm font-semibold text-white/80">fatimazehra.work@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/message/DRFATIMAZAHRA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Dr. Fatima on WhatsApp"
                className="group flex items-center gap-4 surface-card rounded-xl p-4 card-hover"
              >
                <div className="w-11 h-11 bg-[#25D366]/10 rounded-xl flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/35 mb-0.5">WhatsApp</p>
                  <p className="text-sm font-semibold text-white/80">Chat with Dr. Fatima</p>
                </div>
              </a>
            </div>

            {/* Requirements info box — highlighted with left blue accent */}
            <div className="requirements-box rounded-2xl p-6">
              <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Requirements — What Happens Next
              </p>
              <ol className="space-y-3">
                {[
                  "We schedule a convenient time for the free demo.",
                  "A 30-minute interactive session via Zoom or Meet.",
                  "Curriculum overview and personalised study roadmap.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3B82F6] text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Glassmorphic Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-1">Contact Dr. Fatima</h3>
              <p className="text-sm text-white/40 mb-7">Fill in the form — she'll reply within 24 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/25 h-11 text-sm focus:border-[#3B82F6]/50 focus:bg-white/8"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/25 h-11 text-sm focus:border-[#3B82F6]/50 focus:bg-white/8"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">Curriculum / Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-white/5 border-white/10 text-white/70 h-11 text-sm focus:border-[#3B82F6]/50">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#1E293B] border-white/10">
                            <SelectItem value="olevel">O-Level / IGCSE Sciences</SelectItem>
                            <SelectItem value="alevel-bio">A-Level Biology</SelectItem>
                            <SelectItem value="alevel-chem">A-Level Chemistry</SelectItem>
                            <SelectItem value="mcat">MCAT Preparation</SelectItem>
                            <SelectItem value="other">Other Medical Subjects</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">Message / Goals</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us your current grade and target..."
                            className="resize-none rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/25 h-28 text-sm focus:border-[#3B82F6]/50 focus:bg-white/8"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="btn-primary-glow w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl py-3.5 text-[15px] transition-all active:scale-[0.97] flex items-center justify-center gap-2 mt-2"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Sending..." : "Request Free Demo Class"}
                    {!submitMutation.isPending && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
