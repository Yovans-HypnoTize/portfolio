import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechVision Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      highlights: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces.",
      technologies: ["React", "JavaScript", "CSS3", "Firebase", "Figma"],
      highlights: [
        "Built 15+ responsive web applications",
        "Reduced load times by 35%",
        "Collaborated with UX/UI designers"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupLab",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Started career building websites and learning modern development practices in a fast-paced startup environment.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      highlights: [
        "Delivered 20+ client projects",
        "Learned agile development",
        "Built first e-commerce platform"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and building amazing products with incredible teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                
                <Card className="card-gradient border-border/50 hover:shadow-elegant transition-all duration-300 md:ml-16">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {experience.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mr-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;