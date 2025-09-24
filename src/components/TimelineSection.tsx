import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faReact, 
  faNodeJs, 
  faPython 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faRocket, 
  faGraduationCap,
  faStar
} from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-item", 
        { opacity: 0, x: (index) => index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".timeline-line", 
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineData = [
    {
      year: "2020",
      title: "Started Web Development Journey",
      description: "Began learning HTML, CSS, and basic JavaScript. Built my first static websites and discovered my passion for creating digital experiences.",
      icon: faHtml5,
      gradient: "gradient-accent",
      achievements: ["First HTML/CSS website", "JavaScript fundamentals", "Responsive design basics"]
    },
    {
      year: "2021",
      title: "Mastered JavaScript & React",
      description: "Dove deep into modern JavaScript and React.js. Built interactive web applications and learned state management with Redux.",
      icon: faReact,
      gradient: "gradient-primary",
      achievements: ["React.js proficiency", "ES6+ features", "Redux state management", "Component architecture"]
    },
    {
      year: "2022",
      title: "Full-Stack MERN Development",
      description: "Expanded to backend development with Node.js, Express, and MongoDB. Created complete full-stack applications with authentication and databases.",
      icon: faNodeJs,
      gradient: "gradient-secondary",
      achievements: ["Node.js & Express.js", "MongoDB database design", "RESTful APIs", "JWT authentication"]
    },
    {
      year: "2023",
      title: "Advanced Skills & Deployment",
      description: "Focused on advanced React patterns, animation libraries like GSAP, and learned deployment strategies. Built production-ready applications.",
      icon: faRocket,
      gradient: "gradient-accent",
      achievements: ["Advanced React patterns", "GSAP animations", "Cloud deployment", "Performance optimization"]
    },
    {
      year: "2024",
      title: "AI Integration & Python",
      description: "Exploring the intersection of web development and AI. Learning Python for machine learning and integrating AI capabilities into web applications.",
      icon: faPython,
      gradient: "gradient-primary",
      achievements: ["Python programming", "AI/ML fundamentals", "OpenAI API integration", "Generative AI applications"]
    }
  ];

  return (
    <section id="journey" ref={sectionRef} className="py-16 md:py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            My Learning Journey
          </h2>
          <p className="text-base md:text-xl text-text-secondary max-w-3xl mx-auto">
            From curious beginner to full-stack developer - a timeline of growth, learning, and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-surface-glass rounded-full hidden md:block">
            <div className="timeline-line w-full bg-gradient-primary rounded-full"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item flex flex-col md:flex-row items-center md:justify-between ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                  <div className="glass-card p-6 group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-2xl bg-${item.gradient} bg-clip-text text-transparent`}>
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-primary-glow">
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-text-secondary mb-4 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm md:text-base font-semibold text-text-primary flex items-center gap-2">
                        <FontAwesomeIcon icon={faStar} className="text-accent-glow" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="text-text-secondary text-sm md:text-base flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 mb-4 md:mb-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-${item.gradient} flex items-center justify-center shadow-glow`}>
                    <FontAwesomeIcon icon={item.icon} className="text-white text-lg md:text-xl"/>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Status */}
          <div className="text-center mt-12 md:mt-16">
            <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto">
              <FontAwesomeIcon icon={faGraduationCap} className="text-3xl md:text-4xl text-primary-glow mb-4"/>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Currently Learning</h3>
              <p className="text-text-secondary text-sm md:text-base mb-6">
                Always staying ahead of the curve by exploring new technologies and best practices. 
                Currently focusing on advanced AI integrations, cloud architecture, and emerging web technologies.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {['Next.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'Microservices'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-surface-glass text-text-primary font-medium rounded-lg border border-glass-border hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
