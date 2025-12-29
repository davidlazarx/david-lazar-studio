import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="David Lazar" className="w-8 h-8" />
            <span className="font-display text-lg">David Lazar</span>
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#music"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Music
            </a>
            <a
              href="#contact"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} David Lazar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
