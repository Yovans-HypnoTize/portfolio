import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Focused",
      description: "Creating beautiful, user-centered interfaces"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Strong communication and teamwork"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a curious computer science student, I've evolved into a software engineer 
                with over 1 year of experience. My journey began with simple HTML pages and has grown 
                into building complex, scalable applications that serve thousands of users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to solve real-world problems and create meaningful 
                connections. Every project I work on is an opportunity to learn something new and push 
                the boundaries of what's possible.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">What drives me:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Creating intuitive user experiences
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Continuous learning and growth
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-3" />
                  Building meaningful digital solutions
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50 hover:shadow-elegant transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;