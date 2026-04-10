const Footer = () => (
  <footer className="border-t py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2024 Kalisa Kenny. All rights reserved.</p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;
