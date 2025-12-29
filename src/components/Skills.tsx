import { Code, Scale, Music, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Computer Science",
    description: "Software development, algorithms, and system design with a focus on practical applications.",
    tags: ["Programming", "Algorithms", "System Design"],
  },
  {
    icon: Scale,
    title: "Digital Law",
    description: "Preparing to bridge technology and legal frameworks in the digital age.",
    tags: ["Tech Policy", "Cyber Law", "IP Rights"],
  },
  {
    icon: Music,
    title: "Music & Art",
    description: "Creative expression through composition, production, and performance.",
    tags: ["Composition", "Production", "Performance"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical thinking combined with creative approaches to complex challenges.",
    tags: ["Critical Thinking", "Innovation", "Research"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-card/50 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Skills & <span className="text-primary">Qualifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <skill.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                
                <h3 className="font-display text-2xl mb-4">{skill.title}</h3>
                
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
