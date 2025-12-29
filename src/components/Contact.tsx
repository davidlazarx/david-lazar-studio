import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "Get in touch",
    href: "mailto:hello@davidlazar.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-card/30 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Contact
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
            Let's <span className="text-primary italic">Connect</span>
          </h2>
          
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-16">
            Whether you want to discuss technology, law, music, or potential collaborations—
            I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group p-8 border border-border hover:border-primary bg-background transition-all duration-500 flex flex-col items-center"
              >
                <link.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4" />
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {link.label}
                </span>
                <span className="font-display text-lg flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  {link.value}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </a>
            ))}
          </div>

          {/* Large CTA */}
          <div className="inline-block">
            <a
              href="mailto:hello@davidlazar.com"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
