import { Play, Music2, Disc } from "lucide-react";

const MusicSection = () => {
  return (
    <section id="music" className="py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-foreground rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-foreground rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Creative Side
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-light mb-12">
            Music & <span className="italic text-primary">Art</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Music Card 1 */}
            <div className="group bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500">
              <div className="w-full aspect-square bg-secondary/50 mb-6 flex items-center justify-center relative overflow-hidden">
                <Disc className="w-20 h-20 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                  <Play className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">Compositions</h3>
              <p className="font-body text-sm text-muted-foreground">
                Original music pieces and arrangements
              </p>
            </div>

            {/* Music Card 2 */}
            <div className="group bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500">
              <div className="w-full aspect-square bg-secondary/50 mb-6 flex items-center justify-center relative overflow-hidden">
                <Music2 className="w-20 h-20 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                  <Play className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">Productions</h3>
              <p className="font-body text-sm text-muted-foreground">
                Audio production and mixing projects
              </p>
            </div>

            {/* Music Card 3 */}
            <div className="group bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500">
              <div className="w-full aspect-square bg-secondary/50 mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 border-2 border-muted-foreground group-hover:border-primary rounded-full flex items-center justify-center transition-colors duration-300">
                  <div className="w-8 h-8 border-2 border-muted-foreground group-hover:border-primary rounded-full transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                  <Play className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-2">Performances</h3>
              <p className="font-body text-sm text-muted-foreground">
                Live performances and collaborations
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center p-12 border border-dashed border-border">
            <p className="font-body text-muted-foreground mb-4">
              More musical content coming soon
            </p>
            <span className="font-display text-2xl text-primary italic">
              Stay tuned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
