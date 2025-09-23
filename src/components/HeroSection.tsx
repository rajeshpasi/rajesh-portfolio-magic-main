import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/profile.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, socialRef.current], {
        opacity: 0,
        y: 50
      });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");

      // Floating animation for profile image
      gsap.to(".profile-float", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Particles animation
      gsap.to(".particle", {
        y: -100,
        x: "random(-50, 50)",
        rotation: "random(-180, 180)",
        duration: "random(2, 4)",
        ease: "none",
        repeat: -1,
        stagger: {
          each: 0.2,
          from: "random"
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-gradient-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Side */}
        <div className="text-center lg:text-left space-y-8">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Rajesh</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-text-secondary max-w-2xl"
          >
            MERN Stack Developer & AI Enthusiast crafting modern web experiences 
            with cutting-edge technologies
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-hero flex items-center gap-2"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex gap-6 justify-center lg:justify-start">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-glow transition-colors duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-glow transition-colors duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Profile Image Side */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="profile-float glass-card p-8 rounded-full">
              <img 
                src={profileImage} 
                alt="Rajesh Kumar Pasi - MERN Stack Developer"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover glow"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-full floating opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-secondary rounded-full floating-delayed opacity-40"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-primary rounded-full floating opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator"></div>
        <button 
          onClick={() => scrollToSection('about')}
          className="mt-4 text-text-secondary hover:text-primary transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;