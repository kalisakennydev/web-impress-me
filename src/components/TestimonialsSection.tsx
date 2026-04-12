import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Outstanding developer with exceptional problem-solving skills. Delivered our project ahead of schedule with excellent quality.",
  },
  {
    text: "A true professional who brings creativity and technical expertise to every project. Highly recommended!",
  },
  {
    text: "Excellent communication and coding skills. Made our complex requirements look easy to implement.",
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
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border shadow-sm relative"
          >
            <Quote className="text-primary/20 mb-4" size={32} />
            <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
