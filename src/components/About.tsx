const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            About Me
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-light mb-12">
            Where <span className="italic">Technology</span> meets{" "}
            <span className="text-primary">Creativity</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed">
                I'm a Computer Science student at Maastricht University, with a passion for seeing the role 
                laws play in shaping the technology we rely on every day. <br></br> <br></br>
                My academic journey began in the world of computers, where I learned how these
                magic boxes think and operate. This technical foundation led me to question how such technologies are
                commercialised, regulated and brought to market, determining me to pursue a minor in Entrepreneurship
                during my elective semester. <br></br> <br></br>
                I am now steering my journey toward Digital Law, where I seek to navigate the complex legal 
                landscapes shaped by emerging technologies.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Beyond lines of code, I find creative expression through art, especially music. 
                I take great pleasure in writing, producing and releasing my own music, as well as playing 
                various instruments. <br></br> <br></br>
                I have been fortunate enough to share stages with talented artists spanning a wide range
                of genres, including pop, blues, folk, rock and metal🤘.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-display text-2xl mb-2">Education</h3>
                <p className="font-body text-muted-foreground">
                  BSc Computer Science Student
                </p>
                <p className="font-body text-sm text-muted-foreground/70">
                  Minor in Entrepreneurship
                </p>
              </div>

              <div className="border-l-2 border-border pl-6 hover:border-primary transition-colors duration-300">
                <h3 className="font-display text-2xl mb-2">Interests</h3>
                <ul className="font-body text-muted-foreground space-y-1">
                  <li>Technology & Legal Frameworks</li>
                  <li>Music Composition, Production & Performance</li>
                  <li>Creative Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
