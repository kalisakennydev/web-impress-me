import profileImg from "@/assets/profile.jpg";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 py-3 gap-2">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src={profileImg} alt="Kalisa Kenny" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-foreground leading-tight text-sm">Kalisa Kenny</p>
            <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
          </div>
        </a>

        {/* Always-visible nav links (scrollable on small screens) */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7 lg:gap-8 overflow-x-auto no-scrollbar flex-1 justify-center min-w-0">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full text-xs sm:text-sm px-3 sm:px-4">
            <a href="mailto:kalisakenny@gmail.com">Hire Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
