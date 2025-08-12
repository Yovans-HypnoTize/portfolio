import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Modern e-commerce platform with real-time inventory management",
      fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform supports multiple vendors, advanced search functionality, and mobile-responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Multi-vendor support",
        "Advanced search and filtering",
        "Responsive design",
        "Admin analytics dashboard"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      description: "Collaborative task management with real-time updates",
      fullDescription: "A powerful task management application that enables teams to collaborate effectively. Features include drag-and-drop task boards, real-time updates, file attachments, and comprehensive project analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      features: [
        "Drag-and-drop interface",
        "Real-time collaboration",
        "File attachments",
        "Project analytics",
        "Team management",
        "Mobile app"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "Frontend",
      description: "Beautiful weather app with location-based forecasts",
      fullDescription: "An elegant weather dashboard providing detailed forecasts, weather maps, and historical data. The app features a clean, intuitive interface with animated weather icons and customizable location tracking.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "JavaScript", "OpenWeather API", "CSS3"],
      features: [
        "Location-based forecasts",
        "Interactive weather maps",
        "Historical weather data",
        "Animated weather icons",
        "Multiple location tracking",
        "Severe weather alerts"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Completed"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      category: "Full Stack",
      description: "Analytics dashboard for social media performance",
      fullDescription: "A comprehensive analytics platform that aggregates data from multiple social media platforms. Provides detailed insights, trend analysis, and automated reporting for social media managers and marketers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "Django", "PostgreSQL", "D3.js"],
      features: [
        "Multi-platform integration",
        "Real-time analytics",
        "Custom dashboard creation",
        "Automated reporting",
        "Competitor analysis",
        "Export capabilities"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-border/50 hover:shadow-elegant transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge
                    className="absolute top-4 right-4"
                    variant={project.status === "Completed" ? "default" : "secondary"}
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, idx: number) => (
                          <Badge key={idx} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button asChild>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;