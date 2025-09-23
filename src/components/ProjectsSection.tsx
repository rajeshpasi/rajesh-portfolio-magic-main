import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faFilter } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Projects animation
      gsap.fromTo(".project-card", 
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Re-animate filtered projects
    if (projectsRef.current) {
      gsap.fromTo(".project-card", 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [activeFilter]);

  const filters = ['All', 'Web Development', 'AI Projects', 'College Projects'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce MERN Application",
      description: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application powered by OpenAI API with intelligent responses and conversation memory.",
      category: "AI Projects",
      technologies: ["Python", "OpenAI API", "React", "WebSocket"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates, team collaboration, and progress tracking.",
      category: "Web Development",
      technologies: ["React", "Firebase", "Material-UI", "Node.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Image Classification Model",
      description: "Deep learning model for image classification using TensorFlow with a Flask API for easy integration.",
      category: "AI Projects",
      technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      title: "College Event Management",
      description: "Web platform for managing college events, registrations, and notifications with admin controls.",
      category: "College Projects",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 6,
      title: "Student Portal System",
      description: "Comprehensive student management system with grades, attendance, and course management features.",
      category: "College Projects",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A showcase of my best work, from full-stack applications to AI-powered solutions
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FontAwesomeIcon icon={faFilter} className="text-text-secondary mt-2" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                  : 'glass-card text-text-secondary hover:text-text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`project-card glass-card group overflow-hidden transition-all duration-500 hover:scale-105 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 text-sm py-2 px-4"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-hero flex items-center gap-2 text-sm py-2 px-4"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-surface-glass text-text-secondary text-xs rounded-full border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary-glow font-medium text-sm">
                    {project.category}
                  </span>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary-glow transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-glow transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Want to see more projects or collaborate on something amazing?
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;