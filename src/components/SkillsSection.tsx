import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs, 
  faPython, 
  faGithub, 
  faJs, 
  faHtml5, 
  faCss3Alt,
  faBootstrap 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCogs, 
  faRobot, 
  faCode 
} from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Skills categories animation
      gsap.fromTo(".skill-category", 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Progress bars animation
      gsap.fromTo(".progress-bar", 
        { width: 0 },
        {
          width: (index, target) => target.dataset.progress + '%',
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-progress",
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skill icons hover effect
      gsap.set(".skill-icon", { scale: 1 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faCode,
      gradient: "gradient-primary",
      skills: [
        { name: "React.js", icon: faReact, level: 90 },
        { name: "JavaScript", icon: faJs, level: 88 },
        { name: "HTML5", icon: faHtml5, level: 95 },
        { name: "CSS3", icon: faCss3Alt, level: 90 },
        { name: "Tailwind CSS", icon: faBootstrap, level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: faCogs,
      gradient: "gradient-secondary",
      skills: [
        { name: "Node.js", icon: faNodeJs, level: 85 },
        { name: "Express.js", icon: faCogs, level: 82 },
        { name: "MongoDB", icon: faDatabase, level: 80 },
        { name: "RESTful APIs", icon: faCogs, level: 88 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: faRobot,
      gradient: "gradient-accent",
      skills: [
        { name: "Python", icon: faPython, level: 70 },
        { name: "Generative AI", icon: faRobot, level: 65 },
        { name: "Machine Learning", icon: faRobot, level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: faGithub,
      gradient: "gradient-primary",
      skills: [
        { name: "Git & GitHub", icon: faGithub, level: 88 },
        { name: "GSAP", icon: faCogs, level: 75 },
        { name: "VS Code", icon: faCode, level: 95 }
      ]
    }
  ];

  const topSkills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "Python", level: 70 },
    { name: "Tailwind CSS", level: 92 },
    { name: "GitHub", level: 88 },
    { name: "GSAP", level: 75 },
    { name: "Generative AI", level: 65 }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className={`text-3xl mb-4 bg-${category.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon icon={category.icon} />
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <FontAwesomeIcon 
                      icon={skill.icon} 
                      className="skill-icon text-text-secondary hover:text-primary-glow transition-colors duration-300" 
                    />
                    <span className="text-text-secondary text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="skills-progress glass-card p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Proficiency Levels
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary font-medium">{skill.name}</span>
                  <span className="text-text-secondary text-sm">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                  <div 
                    className="progress-bar h-full bg-gradient-primary rounded-full relative"
                    data-progress={skill.level}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;