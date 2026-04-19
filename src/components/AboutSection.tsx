import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Frappe", "ERPNext", "PostgreSQL", "MongoDB", "AWS", "Docker", "Tailwind CSS"];

const skills = [
  { name: "React/Next.js", pct: 90 },
  { name: "TypeScript", pct: 85 },
  { name: "Node.js", pct: 80 },
  { name: "Frappe/ERPNext", pct: 80 },
  { name: "UI/UX Design", pct: 75 },
];

const AboutSection = () => (
  <section id="about" className="section-padding section-alt">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Who I Am</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">About Me</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a passionate full-stack developer with over 5 years of experience building scalable, user-centric web applications. I began my journey as a developer in 2020 and have since worked on diverse projects, continuously improving my skills and delivering high-quality solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            My expertise spans modern JavaScript frameworks, backend development, and crafting seamless user experiences. I'm committed to writing clean, maintainable code and staying up to date with the latest industry trends and best practices.
          </p>

          <h3 className="font-heading font-bold text-lg mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((t) => (
              <span key={t} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full font-medium">{t}</span>
            ))}
          </div>

          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap size={18} className="text-primary" />
              <span>Computer Science, BS</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 border shadow-sm scroll-mt-20"
        >
          <h3 className="font-heading font-bold text-lg mb-6">Core Skills</h3>
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-primary font-semibold">{s.pct}%</span>
                </div>
                <Progress value={s.pct} className="h-2.5 bg-muted [&>div]:bg-primary" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
