import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-12">Have an exciting project or opportunity? I'd love to hear about it.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:john.doe@example.com" className="font-medium hover:text-primary transition-colors">john.doe@example.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={22} />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border shadow-sm space-y-5"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Project Details *</label>
              <Textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="rounded-lg"
              />
            </div>
            <Button type="submit" size="lg" className="rounded-full w-full">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
