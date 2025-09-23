import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.fromTo(cardRef.current, 
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text animation
      gsap.fromTo(textRef.current, 
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Traits animation
      gsap.fromTo(".trait-card", 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".traits-grid",
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const traits = [
    {
      icon: faCode,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions"
    },
    {
      icon: faUsers,
      title: "Team Player",
      description: "Collaborative approach to building amazing products together"
    },
    {
      icon: faLightbulb,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and best practices"
    },
    {
      icon: faRocket,
      title: "Innovation Focused",
      description: "Passionate about implementing cutting-edge solutions"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate self-taught developer with a love for creating impactful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Card */}
          <div ref={cardRef} className="flex justify-center lg:justify-start">
            <div className="glass-card p-8 max-w-md">
              <div className="relative mb-6">
                <img 
                  src={profileImage} 
                  alt="Rajesh Kumar Pasi"
                  className="w-32 h-32 rounded-full object-cover mx-auto glow-accent"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full border-4 border-surface"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Rajesh Kumar Pasi
                </h3>
                <p className="text-primary-glow font-medium mb-4">
                  MERN Stack Developer
                </p>
                <div className="flex justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-sm">
                    React Expert
                  </span>
                  <span className="px-3 py-1 bg-gradient-secondary text-secondary-foreground rounded-full text-sm">
                    AI Enthusiast
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div ref={textRef} className="space-y-6">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a passionate <span className="text-primary-glow font-semibold">self-taught web developer</span> who 
                fell in love with coding and never looked back. My journey started with curiosity and has evolved 
                into a deep expertise in the <span className="text-accent-glow font-semibold">MERN stack</span>.
              </p>
              
              <p>
                Beyond traditional web development, I'm fascinated by the potential of 
                <span className="text-secondary-glow font-semibold"> Generative AI</span> and actively exploring 
                how to integrate these technologies into modern web applications. I believe in the power of 
                continuous learning and staying ahead of the curve.
              </p>

              <p>
                When I'm not coding, you'll find me experimenting with new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always excited 
                about new challenges and opportunities to grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React.js', 'Node.js', 'MongoDB', 'Python', 'AI/ML', 'GSAP'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 glass-card text-text-primary font-medium rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Traits */}
        <div className="traits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <div key={index} className="trait-card glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4 text-primary-glow group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={trait.icon} />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">
                {trait.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;