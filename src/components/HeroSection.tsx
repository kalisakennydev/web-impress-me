import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Download, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "25+", label: "Projects Done" },
  { value: "10+", label: "Technologies" },
];

const HeroSection = () => (
  <section id="home" className="section-padding pt-28 md:pt-32 lg:pt-36">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex items-center gap-2 mb-5">
          <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Open to Work
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for projects
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
          Transforming{" "}
          <span className="text-primary block">Ideas Into</span>{" "}
          Real Products
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-7 leading-relaxed">
          I transform ideas into elegant, high-performance web applications. Specialized in React, Next.js, and modern JavaScript ecosystems.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button asChild size="lg" className="rounded-full gap-2">
            <a href="#contact"><MessageCircle size={18} /> Let's Talk</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 border-primary text-primary hover:bg-primary/5">
            <a href="#work"><Briefcase size={18} /> View Portfolio</a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full gap-2 text-muted-foreground">
            <a href="/Kalisa_Kenny_CV.pdf" download><Download size={18} /> Resume</a>
          </Button>
        </div>

        <div className="flex gap-10 sm:gap-12 border-t pt-6 border-border">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold">{s.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex justify-center lg:justify-end order-first lg:order-last mb-6 lg:mb-0"
      >
        {/* Decorative gradient blob */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-3xl" />
        </div>

        <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] max-h-[520px] w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[440px] group ring-1 ring-border shadow-2xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>

        <div className="absolute -bottom-2 right-2 sm:right-0 lg:bottom-6 lg:right-[-10px] bg-card/95 backdrop-blur rounded-xl shadow-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 border">
          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Zap className="text-primary" size={18} />
          </span>
          <div>
            <p className="font-semibold text-xs sm:text-sm">Quick Turnaround</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground">2-4 weeks delivery</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
