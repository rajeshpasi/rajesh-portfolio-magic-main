import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faPaperPlane,
  faUser,
  faMessage
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact info animation
      gsap.fromTo(contactInfoRef.current, 
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

      // Form animation
      gsap.fromTo(formRef.current, 
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

      // Social links animation
      gsap.fromTo(".social-link", 
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".social-links",
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "rajesh.kumar@example.com",
      href: "mailto:rajesh.kumar@example.com"
    },
    {
      icon: faPhone,
      title: "Phone",
      value: "+91 12345 67890",
      href: "tel:+911234567890"
    },
    {
      icon: faLocationDot,
      title: "Location",
      value: "India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-white"
    },
    {
      icon: faLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: faTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Get in Touch
              </h3>
              
              <p className="text-text-secondary mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. 
                Whether you're looking for a developer for your next project or want to collaborate on something amazing, 
                let's connect!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={info.icon} className="text-base md:text-lg" />
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold">{info.title}</h4>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-text-secondary hover:text-primary-glow transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-secondary">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links glass-card p-8">
              <h4 className="text-xl font-bold text-text-primary mb-6">
                Connect with Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link w-12 h-12 rounded-full bg-surface-glass border border-glass-border flex items-center justify-center text-text-secondary ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-glow`}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faMessage} className="text-primary-glow" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                      <FontAwesomeIcon icon={faUser} className="mr-2 text-text-secondary" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface-glass border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-glow transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-text-secondary" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface-glass border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-glow transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface-glass border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-glow transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-glass border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-glow transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-hero flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-center text-green-400 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-center text-red-400 font-medium">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;