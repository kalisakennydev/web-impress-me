import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img src={profileImg} alt="Kalisa Kenny" className="w-10 h-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-foreground leading-tight">Kalisa Kenny</p>
            <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <Button asChild className="hidden md:inline-flex rounded-full">
          <a href="mailto:kalisakenny@gmail.com">Hire Me</a>
        </Button>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-1">
              {l.label}
            </a>
          ))}
          <Button asChild className="rounded-full w-fit">
            <a href="mailto:kalisakenny@gmail.com" onClick={() => setOpen(false)}>Hire Me</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
