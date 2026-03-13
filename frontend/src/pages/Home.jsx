import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Zap, 
  Target, 
  Clock, 
  TrendingUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { mockData } from '../utils/mock';
import '../styles/home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="animated-background"></div>
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress"></div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-content">
          <div className="nav-logo">Abdul Irfan</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('hero')} className={activeSection === 'hero' ? 'active' : ''}>Home</button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
            <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hello, I'm</div>
            <h1 className="hero-name">
              <span className="gradient-text">Abdul Irfan A</span>
            </h1>
            <div className="hero-roles">
              <span className="role-item">Full Stack Developer</span>
              <span className="role-divider">|</span>
              <span className="role-item">Android Developer</span>
              <span className="role-divider">|</span>
              <span className="role-item">AI Prompt Engineer</span>
            </div>
            <p className="hero-description">
              I build scalable web applications, Android apps, and intelligent AI-powered solutions. 
              Passionate about solving real-world problems using modern technologies and AI.
            </p>
            <div className="hero-buttons">
              <Button onClick={() => scrollToSection('projects')} className="cta-primary">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection('contact')} className="cta-secondary">
                Hire Me
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-icon icon-1"><Code size={40} /></div>
            <div className="floating-icon icon-2"><Database size={35} /></div>
            <div className="floating-icon icon-3"><Smartphone size={35} /></div>
            <div className="floating-icon icon-4"><Brain size={40} /></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="section-content">
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="about-grid">
            <Card className="glass-card about-card">
              <CardContent className="about-content">
                <p className="about-text">
                  Abdul Irfan is an MCA postgraduate from Dr. M.G.R Educational and Research Institute 
                  with strong expertise in software development, database systems, and modern web technologies.
                </p>
                <p className="about-text">
                  He specializes in building <strong>web applications, Android apps, and AI-powered tools</strong>.
                  He is also skilled in <strong>AI Prompt Engineering</strong>, designing structured prompts 
                  to build intelligent AI solutions.
                </p>
                <p className="about-text">
                  He enjoys building systems that are efficient, scalable, and solve real-world problems 
                  through technology.
                </p>
              </CardContent>
            </Card>
            <div className="qualities-grid">
              {mockData.qualities.map((quality, index) => (
                <Card key={index} className="glass-card quality-card">
                  <CardContent className="quality-content">
                    <div className="quality-icon">{quality.icon}</div>
                    <h3 className="quality-title">{quality.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <div className="section-content">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="skills-grid">
            {mockData.skillCategories.map((category, index) => (
              <Card key={index} className="glass-card skill-category-card">
                <CardContent className="skill-category-content">
                  <div className="skill-category-header">
                    <div className="skill-category-icon">{category.icon}</div>
                    <h3 className="skill-category-title">{category.category}</h3>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="skill-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <div className="section-content">
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="projects-grid">
            {mockData.projects.map((project, index) => (
              <Card key={index} className={`glass-card project-card ${project.featured ? 'featured-project' : ''}`}>
                <CardContent className="project-content">
                  {project.featured && (
                    <Badge className="featured-badge">AI Project</Badge>
                  )}
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container">
        <div className="section-content">
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="education-grid">
            {mockData.education.map((edu, index) => (
              <Card key={index} className="glass-card education-card">
                <CardContent className="education-content">
                  <div className="education-icon">
                    <GraduationCap size={32} />
                  </div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <Badge className="education-cgpa">CGPA: {edu.cgpa}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-container">
        <div className="section-content">
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="certifications-grid">
            {mockData.certifications.map((cert, index) => (
              <Card key={index} className="glass-card certification-card">
                <CardContent className="certification-content">
                  <Award size={24} className="cert-icon" />
                  <p className="cert-name">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="section-content">
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="contact-grid">
            <div className="contact-info">
              <Card className="glass-card contact-card">
                <CardContent className="contact-info-content">
                  <h3 className="contact-subtitle">Let's Connect</h3>
                  <p className="contact-text">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <div className="contact-items">
                    <a href="mailto:abdulirfanal8870@gmail.com" className="contact-item">
                      <Mail size={20} />
                      <span>abdulirfanal8870@gmail.com</span>
                    </a>
                    <a href="tel:9677388277" className="contact-item">
                      <Phone size={20} />
                      <span>9677388277</span>
                    </a>
                  </div>
                  <div className="social-links">
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="social-link" aria-label="GitHub">
                      <Github size={24} />
                    </a>
                    <a href="mailto:abdulirfanal8870@gmail.com" className="social-link" aria-label="Email">
                      <Mail size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="contact-form-container">
              <Card className="glass-card contact-form-card">
                <CardContent className="contact-form-content">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="form-textarea"
                      />
                    </div>
                    <Button type="submit" className="submit-button">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Abdul Irfan A. Built with passion and modern technologies.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">GitHub</a>
            <a href="mailto:abdulirfanal8870@gmail.com" className="footer-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;