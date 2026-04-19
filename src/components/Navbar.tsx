import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 gap-2">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src={profileImg} alt="Kalisa Kenny" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-foreground leading-tight text-sm">Kalisa Kenny</p>
            <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full hidden sm:inline-flex">
            <a href="mailto:kalisakenny@gmail.com">Hire Me</a>
          </Button>
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b px-6 py-4 flex flex-col gap-3 animate-in slide-in-from-top-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-foreground hover:text-primary transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="rounded-full w-fit mt-2">
            <a href="mailto:kalisakenny@gmail.com" onClick={() => setOpen(false)}>Hire Me</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
