import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/kalisakennydev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kalisa-ndoli-kenny-15b82630b/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/kennyk144541377", label: "Twitter" },
  { icon: Mail, href: "mailto:kalisakenny@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="bg-card border-t">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid sm:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
              K
            </span>
            <span className="font-heading font-bold text-lg">Kalisa Kenny</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Full-stack developer crafting modern, scalable web applications from Kigali, Rwanda.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "About", "Work", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Connect</h4>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kalisa Kenny. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
