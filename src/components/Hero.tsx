import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      {/* Floating logo background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="
          animate-spin-slow
          w-[min(800px,90vw)]
          h-auto
          aspect-square
          object-contain
          "
        />
        </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 animate-fade-in-delay-1">
          David <span className="text-primary font-medium">Lazar</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          Computer Science · Digital Law · Music
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <a
            href="#about"
            className="px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-body text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
