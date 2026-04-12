import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with payment integration and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  },
  {
    num: "02",
    title: "Task Management App",
    desc: "Collaborative project management tool with real-time updates and team features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    num: "03",
    title: "Analytics Dashboard",
    desc: "Real-time analytics dashboard with data visualization and reporting features.",
    tags: ["React", "D3.js", "Express"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

const WorkSection = () => (
  <section id="work" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Featured Work</h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Selected projects that showcase my expertise in building modern, scalable applications
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Project {p.num}</p>
              <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-medium">
                <a href="#" className="flex items-center gap-1 text-primary hover:underline"><ExternalLink size={14} /> View Live</a>
                <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground"><Code2 size={14} /> Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
