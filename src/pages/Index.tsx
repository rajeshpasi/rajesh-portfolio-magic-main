import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import TimelineSection from '../components/TimelineSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Global GSAP configurations
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    });

    // Smooth scrolling for the entire page
    gsap.to("body", {
      css: { scrollBehavior: "smooth" }
    });

    // Performance optimization: refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-glow opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-accent-glow opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
