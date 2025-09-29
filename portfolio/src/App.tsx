import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Download, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Server,
  Database,
  Cloud,
  Briefcase,
  GraduationCap,
  Award,
  Star
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const skills = [
    { category: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Azure'], icon: <Cloud className="w-5 h-5" /> },
    { category: 'DevOps & CI/CD', items: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible'], icon: <Server className="w-5 h-5" /> },
    { category: 'Programming', items: ['Python', 'PHP', 'JavaScript', 'C++'], icon: <Code className="w-5 h-5" /> },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Elasticsearch'], icon: <Database className="w-5 h-5" /> },
    { category: 'Frameworks', items: ['Laravel', 'Django', 'ReactJS', 'Angular'], icon: <Code className="w-5 h-5" /> },
    { category: 'Big Data', items: ['Apache Spark', 'Hadoop', 'Big Query', 'Elasticsearch'], icon: <Database className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: 'Smart Cabin Router',
      description: 'Led development of cutting-edge smart router for in-flight connectivity with real-time aircraft-to-ground communication.',
      technologies: ['Linux', 'Elasticsearch', 'Real-time Protocol', 'Big Data'],
      highlights: ['Customized Linux OS modules', 'Real-time communication protocol', 'Aircraft data monitoring']
    },
    {
      title: 'VoIP Technologies Platform',
      description: 'Contributed to core development of Asterisk and Freeswitch, designed comprehensive VoIP billing system.',
      technologies: ['Asterisk', 'Freeswitch', 'DIDWW', 'DIDX'],
      highlights: ['Core VoIP development', 'Billing system design', 'Telecommunication integration']
    },
    {
      title: 'Virtual Phone Service',
      description: 'Created virtual phone service application providing worldwide phone numbers with server-side architecture.',
      technologies: ['Server Architecture', 'Global Telephony', 'Communication APIs'],
      highlights: ['Worldwide phone numbers', 'Reliable communication solution', 'Successful product launch']
    },
    {
      title: 'SaaS RMM Software',
      description: 'Implemented SaaS applications for Remote Monitoring and Management software with optimized IT solutions.',
      technologies: ['SaaS', 'RMM', 'IT Management', 'Monitoring'],
      highlights: ['IT management optimization', 'Seamless deployment', 'Ongoing support systems']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Sharif Hossain
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-slate-700 border-b-2 border-slate-700'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-slate-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              SH
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent animate-slide-up">
            Sharif Hossain
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 animate-slide-up delay-200">
            Cloud & DevSecOps Engineer
          </p>
          
          <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 animate-slide-up delay-300">
            8+ years of experience designing scalable, secure cloud solutions. 
            Certified Scrum Master passionate about driving business growth through innovative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-500">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button className="px-8 py-4 border-2 border-slate-700 text-slate-700 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12 animate-slide-up delay-700">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              Dhaka, Bangladesh
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4 mr-2" />
              sharif.aiub.20@gmail.com
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Professional Profile
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Professional Profile</h3>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                Dedicated and results-driven Cloud and DevSecOps Engineer with over 8 years of extensive experience 
                in designing, implementing, and optimizing scalable, secure, and efficient cloud-based solutions.
              </p>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                Proficient in leveraging diverse cloud platforms and cutting-edge technologies to enhance operational 
                efficiency and drive business growth. Certified Professional Scrum Master I (PSM I) with a strong 
                foundation in Agile methodologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                  <div className="text-3xl font-bold text-slate-700 mb-2">8+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                  <div className="text-3xl font-bold text-slate-800 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <Briefcase className="w-8 h-8 text-slate-700 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Current Role</h4>
                <p className="text-gray-600 dark:text-gray-400">Assistant Principal Software Engineer I at Stitel Networks, LLC</p>
              </div>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <Award className="w-8 h-8 text-slate-800 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Certification</h4>
                <p className="text-gray-600 dark:text-gray-400">Professional Scrum Master™ I (PSM I) – Scrum.org</p>
              </div>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <GraduationCap className="w-8 h-8 text-slate-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">BS in Computer Science & Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg text-white mr-4">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-700 to-slate-900"></div>
            
            <div className={`ml-20 p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <div className="absolute left-6 w-4 h-4 bg-slate-700 rounded-full -translate-x-1/2"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Assistant Principal Software Engineer I</h3>
                  <p className="text-lg text-slate-700 font-semibold">Stitel Networks, LLC</p>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  <p>June 2017 - Present</p>
                  <p>Phoenix, United States</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Technical leadership and mentorship</li>
                    <li>• CI/CD pipeline design and implementation</li>
                    <li>• Project supervision and architecture decisions</li>
                    <li>• Feature requirements and system design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Achievements</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Led development of smart cabin router</li>
                    <li>• Streamlined deployment processes</li>
                    <li>• Enhanced team technical growth</li>
                    <li>• Maintained competitive technology edge</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Key Project Highlights
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group`}>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 flex items-center gap-2">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Academic Background & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-slate-700 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Bachelor of Science</h3>
                  <p className="text-gray-600 dark:text-gray-400">Computer Science and Engineering</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                American International University-Bangladesh
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Dhaka, Bangladesh</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Graduated: December 2017</p>
            </div>
            
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <Award className="w-12 h-12 text-slate-800 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Professional Certification</h3>
                  <p className="text-gray-600 dark:text-gray-400">Scrum Master™ I (PSM I)</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Scrum.org
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Agile Project Management</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Issued: March 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Contact Information
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
                Feel free to reach out if you'd like to connect!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">sharif.aiub.20@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+8801621561651</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Dhaka, 1230 Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white mr-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="text-gray-600 dark:text-gray-400">sharif-hossain.me</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200`}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              SH
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Cloud & DevSecOps Engineer | Building the future, one solution at a time
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-slate-700 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-slate-700 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2025 Sharif Hossain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;