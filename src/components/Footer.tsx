import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  const techStack = [
    { name: 'React', icon: faReact },
    { name: 'TypeScript', icon: faCode },
    { name: 'GSAP', icon: faCode },
    { name: 'Tailwind', icon: faCode }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/rajeshpasi",
      label: "GitHub"
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/rajesh-kumar-pasi/",
      label: "LinkedIn"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="glass-card mt-20 border-t border-glass-border rounded-b-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="text-2xl font-bold gradient-text">
              Rajesh Kumar Pasi
            </div>
            <p className="text-text-secondary leading-relaxed max-w-md mx-auto md:mx-0">
              MERN Stack Developer & AI Enthusiast passionate about creating 
              modern web experiences and exploring cutting-edge technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-surface-glass border border-glass-border flex items-center justify-center text-text-secondary hover:text-primary-glow hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h3>
            <ul className="grid grid-cols-3 gap-x-6 gap-y-2 max-w-sm ml-4 md:ml-0">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-primary-glow transition-colors duration-300 hover:-translate-y-0.5 transform block text-center"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-text-primary">
              Built With
            </h3>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto md:mx-0">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-text-secondary hover:text-primary-glow transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={tech.icon} className="text-sm" />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-surface-glass rounded-lg border border-glass-border">
              <p className="text-text-secondary text-sm">
                Made with <FontAwesomeIcon icon={faHeart} className="text-red-400 mx-1" /> 
                and lots of ☕ by Rajesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-text-secondary text-sm">
            © {currentYear} Rajesh Kumar Pasi. All rights reserved.
          </p>
          
          <div className="text-text-secondary text-sm">
            <span>Designed & Developed with </span>
            <FontAwesomeIcon icon={faHeart} className="text-primary-glow mx-1" />
            <span>for the web</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;