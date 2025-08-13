import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  GitBranch,
  Cloud,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: "Expert", variant: "default" as const };
    if (level >= 80) return { label: "Advanced", variant: "secondary" as const };
    if (level >= 70) return { label: "Intermediate", variant: "outline" as const };
    return { label: "Beginner", variant: "outline" as const };
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "React", level: 95 },
        // { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 88 },
        // { name: "Python", level: 85 },
        // { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "UI/UX Design", level: 88 },
        { name: "Figma", level: 92 },
        { name: "Adobe Xd", level: 78 },
        // { name: "Adobe Creative Suite", level: 78 },
        { name: "Prototyping", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        // { name: "Docker", level: 82 },
        // { name: "AWS/Cloud", level: 78 },
        { name: "Testing", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-border/50 hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const skillLevel = getSkillLevel(skill.level);
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium text-sm">{skill.name}</span>
                        <Badge variant={skillLevel.variant} className="text-xs">
                          {skillLevel.label}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;