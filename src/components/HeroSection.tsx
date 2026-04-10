import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Download, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Projects Done" },
  { value: "30+", label: "Happy Clients" },
];

const HeroSection = () => (
  <section id="home" className="section-padding pt-32 md:pt-36">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Open to Work
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for projects
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Crafting{" "}
          <span className="text-primary">Digital</span>{" "}
          Experiences
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
          I transform ideas into elegant, high-performance web applications. Specialized in React, Next.js, and modern JavaScript ecosystems.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button asChild size="lg" className="rounded-full gap-2">
            <a href="#contact"><MessageCircle size={18} /> Let's Talk</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 border-primary text-primary hover:bg-primary/5">
            <a href="#work"><Briefcase size={18} /> View Portfolio</a>
          </Button>
          <Button variant="ghost" size="lg" className="rounded-full gap-2 text-muted-foreground">
            <Download size={18} /> Resume
          </Button>
        </div>

        <div className="flex gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-heading font-extrabold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="rounded-2xl overflow-hidden aspect-[3/4] max-h-[520px]">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-6 right-[-20px] bg-card rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Zap className="text-primary" size={20} />
          </span>
          <div>
            <p className="font-semibold text-sm">Quick Turnaround</p>
            <p className="text-xs text-muted-foreground">2-4 weeks delivery</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
