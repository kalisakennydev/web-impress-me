import { Github, Linkedin, Twitter, Mail, ArrowUp, MapPin, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/kalisakennydev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kalisa-ndoli-kenny-15b82630b/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/kennyk144541377", label: "Twitter" },
  { icon: Mail, href: "mailto:kalisakenny@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="bg-[hsl(210,20%,5%)] text-gray-300">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid sm:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={profileImg} alt="Kalisa Kenny" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-heading font-bold text-lg text-white">Kalisa Kenny</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Full-stack developer crafting modern, scalable web applications from Kigali, Rwanda.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Work", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-heading font-bold mb-4 text-white">Connect</h4>
          <div className="flex gap-3 mb-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <a
            href="mailto:kalisakenny@gmail.com"
            className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
          >
            kalisakenny@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kalisa Kenny. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
