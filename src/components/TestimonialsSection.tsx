import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Outstanding developer with exceptional problem-solving skills. Delivered our project ahead of schedule with excellent quality.",
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    initial: "S",
  },
  {
    text: "A true professional who brings creativity and technical expertise to every project. Highly recommended!",
    name: "Michael Chen",
    role: "Product Manager, InnovateLabs",
    initial: "M",
  },
  {
    text: "Excellent communication and coding skills. Made our complex requirements look easy to implement.",
    name: "Emily Rodriguez",
    role: "CTO, StartupHub",
    initial: "E",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Client Feedback</h2>
        <p className="text-muted-foreground mb-12">Here's what clients say about working with me</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border shadow-sm relative"
          >
            <Quote className="text-primary/20 mb-4" size={32} />
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                {t.initial}
              </span>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
