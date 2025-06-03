import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, Menu, X, User, Briefcase, FolderOpen, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const skills = [
    { name: 'HTML', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'React', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'CSS/Tailwind', level: 80, icon: <Palette className="w-5 h-5" /> },
    { name: 'Node.js', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'SQL', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'MongoDB', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'REST API', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'Git/GitHub', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'AI', level: 90, icon: <Briefcase className="w-5 h-5" /> },
    { name: 'TypeScript', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'Next.js', level: 80, icon: <Code className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'Lexi AI',
      description: 'An AI-powered chatbot application designed to provide intelligent and interactive conversations. Built with TypeScript, JavaScript, and styled using Tailwind CSS for a modern and responsive UI.',
      tech: ['TypeScript', 'JavaScript', 'TailwindCSS'],
      image: '/LexiAI.png',
      github: 'https://github.com/DippaFudd/Lexi-AI',
      live: 'https://lexi-ai-two.vercel.app/'
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides real-time weather data and forecasts using the OpenWeather API. Built with JavaScript, HTML and CSS.',
      tech: ['JavaScript','HTML','CSS'],
      image: '/WeatherApp.png',
      github: 'https://github.com/DippaFudd/Weather-App',
      live: 'https://dippafudd.github.io/Weather-App/'
    },
    {
      title: 'Crypto Dashboard',
      description: 'A cryptocurrency dashboard that displays real-time prices, market data, and trends. Built with JavaScript, TypeScript, and Tailwind CSS.',
      tech: ['JavaScript', 'TypeScript', 'Tailwind CSS'],
      image: '/CD.png',
      github: 'https://github.com/DippaFudd/Crypto-dashboard',
      live: 'https://crypto-dashboard-three-orcin.vercel.app/'
    },
    { title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and contact information. Built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS'],
      image: '/Portfolio.png',
      github: '#',
      live: '#'
    },
    { title: 'Tic-Tac-Toe Game',
      description: 'A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Features include a responsive design and local storage for game state.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/TTG.png',
      github: 'https://github.com/DippaFudd/Tic_Tac_Toe',
      live: 'https://tic-tac-toe-self-one-63.vercel.app/'
    },
    { title: 'JRecruiter',
      description: 'A job board application that connects job seekers with employers. Built with TypeScript, TailwindCSS, and JavaScript.',
      tech: ['TypeScript','Tailwind CSS', 'JavaScript'],
      image: '/JRecruiter.png',
      github: 'https://github.com/DippaFudd/JRecruiter',
      live: 'https://github.com/DippaFudd/JRecruiter'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <User className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 w-full px-3 py-3 text-left hover:bg-white/10 rounded-lg"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
  <div className="text-center max-w-4xl mx-auto">
    <div className="mb-8 animate-pulse">
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in">
            Troy Hawkins
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Software Developer
          </p>
          
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications. 
            Currently learning modern technologies and building projects to grow my skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-blue-400 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate aspiring developer who discovered the world of programming through curiosity and creativity. 
                What started as a hobby has grown into a deep passion for building digital solutions that make a difference.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey began with HTML and CSS, where I learned to create beautiful web pages. 
                As I delved deeper, I discovered the power of JavaScript and React, which allowed me to build dynamic and interactive applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or planning my next creative project.
              </p>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span>Washington DC-Baltimore Area</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span>2+ Years Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <span>Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-700 hover:scale-105 ${
                  isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 ${
                  isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-gray-300 mb-12 text-lg">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:hawkinstroy@aol.com"
              className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-blue-400" />
              <span>hawkinstroy@aol.com</span>
            </a>
            
            <a
              href="https://github.com/DippaFudd"
              className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-blue-400" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/troy-hawkins-8b56761ba"
              className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Send me a message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
              ></textarea>
              <button
                onClick={() => alert('Message sent! (Demo - replace with actual email service)')}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Troy Hawkins. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}