import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Edumaat",
      category: "Frontend",
      description:
        "CMS-driven education SaaS platform with dual admin and end-user interfaces",
      fullDescription:
        "A CMS-driven education management platform built with React and TypeScript, featuring dual admin and end-user interfaces, dynamic content loading, and role-based authentication. Supports 48+ subscription services with responsive design, reusable components, global state management via Redux Toolkit, and robust form handling using Formik and Yup.",
      image:
        "https://images.unsplash.com/photo-1676287568137-527bf97dd524?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "React Router DOM",
        "MUI",
        "Tailwind CSS",
      ],
      features: [
        "Dual-interface platform for admins and end users",
        "CMS-driven dynamic content management",
        "Role-based authentication and access control",
        "Support for 48+ subscription-based services",
        "Reusable, mobile-responsive UI components",
        "Centralized global state management with Redux Toolkit",
        "Robust form handling with Formik and Yup",
        "Support ticketing system for subscribed services",
      ],
      liveUrl: "https://edumaat.com/",
      githubUrl: "",
      status: "Completed",
    },
    {
      id: 2,
      title: "Astro Learning Platform",
      category: "Frontend",
      description:
        "Cross-platform e-learning with admin web portal, student app, courses, and subscriptions.",
      fullDescription:
        "A cross-platform e-learning system built with React and React Native, featuring dedicated portals for admins/teachers (web) and students (mobile). The web portal enables admins to manage subscriptions and teachers to create courses and quizzes through multi-step forms, while the mobile app offers students an interactive learning experience with role-based access to free and premium content. The platform integrates Razorpay for subscription payments, Firebase Cloud Messaging for real-time notifications, and Redux Toolkit for scalable state management across both web and mobile.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "React Router",
        "MUI",
        "Bootstrap",
        "Formik",
        "Yup",
        "React Native",
        "React Navigation",
        "FCM (Expo Notifications)",
      ],
      features: [
        "Dual portals for Admins/Teachers (Web) and Students (Mobile)",
        "Course and quiz creation with multi-step forms",
        "Subscription management with tiered plans (Basic, Pro, Premium)",
        "Role-based access control for premium content",
        "Modern, responsive admin dashboard (MUI & Bootstrap)",
        "Centralized state management with Redux Toolkit",
        "Secure payments integration with Razorpay",
        "Push notifications with Firebase Cloud Messaging (FCM)",
        "Student app with Bottom Tab & Drawer Navigation",
        "Support ticketing system for students",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Patient Engagement",
      category: "Frontend",
      description:
        "A cross-platform healthcare app with secure login, real-time document streaming, and AI-powered doubt detection.",
      fullDescription:
        "A cross-platform healthcare mobile application built with React Native, providing seamless engagement between patients and doctors. The app features secure JWT-based authentication, real-time document viewing with WebSocket streaming, and AI-driven doubt detection via facial expression analysis. It includes responsive, user-friendly interfaces for accessing personalized and general medical documents, while Redux Toolkit ensures scalable global state management for sessions, documents, and chat functionality across Android and iOS.",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "React Native",
        "Redux Toolkit",
        "TypeScript",
        "WebSockets",
      ],
      features: [
        "Cross-platform mobile app for Android and iOS",
        "Secure JWT-based authentication",
        "Responsive patient interfaces for medical document access",
        "Real-time WebSocket streaming for document reading",
        "AI-driven doubt detection via facial expression analysis",
        "Scalable state management with Redux Toolkit",
        "User session and chat management",
        "Structured document categorization and easy navigation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "In progress",
    },
    {
      id: 4,
      title: "Astro Tour",
      category: "Frontend",
      description:
        "Travel management web app with admin/user portals, CRUD operations, and responsive design.",
      fullDescription:
        "A travel management web application with separate admin and user portals, designed to simplify destination management and customizable travel packages. The platform features responsive UI built with Bootstrap, CRUD operations with dynamic data rendering, and API integration with file uploads. Admins and sub-admins can efficiently manage tour packages, cities, and staff, while Redux ensures predictable state management. ESLint was used to maintain code quality and consistency.",
      image:
        "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=600&h=400&fit=crop",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "Redux",
        "TypeScript",
      ],
      features: [
        "Separate Admin Panel and User-facing portal",
        "Responsive UI with Bootstrap grid system",
        "CRUD operations for tours and packages",
        "Dynamic data rendering with API integration",
        "Admin management of staff, cities, and packages",
        "Centralized state management using Redux",
        "File upload support for tour content",
        "Code consistency and optimization with ESLint",
      ],
      liveUrl: "https://astroexplorex.com/",
      githubUrl: "",
      status: "Completed",
    },
    {
      id: 5,
      title: "Back2U – Document Retrieval Application",
      category: "Frontend",
      description:
        "Secure document retrieval web app with admin verification, status tracking, and payment integration",
      fullDescription:
        "A secure web application that allows applicants to upload missing documents, preview them, and track their status in real time. The platform features an admin panel for authorities to verify, approve, or reject submissions, a notification system to update applicants within 30 working days, and an integrated payment workflow for document retrieval. Built with React.js and Redux, the app ensures smooth state management and responsive, user-friendly interfaces with Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: [
        "React.js",
        "Redux",
        "Formik",
        "React PDF",
        "Tailwind CSS",
      ],
      features: [
        "Secure document upload and preview for applicants",
        "Admin panel for verification, approval, and rejection",
        "Status tracking and notifications within 30 working days",
        "Integrated payment workflow for document retrieval",
        "Responsive UI with Tailwind CSS",
        "State management using Redux",
        "Form handling with Formik",
        "PDF preview with React PDF",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "In progress",
    },
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
            A showcase of my recent work and the technologies I'm passionate
            about
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient min-h-[470px] border-border/50 hover:shadow-elegant transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge
                    className="absolute top-4 right-4"
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
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
                    {project.liveUrl.trim() !== "" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl.trim() !== "" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
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
                        {selectedProject.features.map(
                          (feature: string, idx: number) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(
                          (tech: string, idx: number) => (
                            <Badge key={idx} variant="outline">
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {selectedProject.liveUrl.trim() !== "" && (
                        <Button asChild>
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.githubUrl.trim() !== "" && (
                        <Button variant="outline" asChild>
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
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
