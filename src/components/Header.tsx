import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Music", href: "#music" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* ✅ allow wrapping on small screens + slightly smaller padding */}
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-wrap items-center justify-between gap-y-2">
        {/* ✅ prevent logo from shrinking */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="David Lazar Logo"
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-xl font-medium tracking-wide hidden sm:block">
            David Lazar
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 md:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-xs md:text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
