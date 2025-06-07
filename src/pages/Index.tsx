import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Trophy, Award, Code, Briefcase, User, BookOpen, MessageCircle, Menu, X, Star, Sparkles, Zap, Heart } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Enhanced scroll tracking for animations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-in');
        }
      });

      // Animate heading underlines on scroll
      const headingUnderlines = document.querySelectorAll('.heading-underline');
      headingUnderlines.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-underline');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements in view
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle resume download
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1ys2FMfqnwlyX8WesXEv_J41noVyF7nvs/view?usp=sharing', '_blank');
  };

  const skills = {
    "Languages": ["Java", "JavaScript", "TypeScript", "React", "HTML", "CSS", "Tailwind", "Bootstrap"],
    "Frameworks/Tools": ["Spring Boot", "Docker", "Git/GitHub", "VSCode", "Linux"],
    "Databases": ["SQL", "PostgreSQL", "MongoDB"],
    "Cloud & APIs": ["AWS", "Netlify", "Oracle Apex", "Vercel", "Postman", "Stripe API"],
    "Design & Other": ["Figma (UI/UX)", "ScreenPipe", "REST APIs", "Team Work", "Networking"]
  };

  const projects = [
    {
      title: "Install-it.AI",
      description: "AI-based system configuration tool with intelligent automation",
      tech: ["Groq", "ScreenPipe", "AI", "Automation"],
      category: "AI Agent",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "SignSarthi (ISL)",
      description: "Real-time sign language translator with TTS/STT capabilities",
      tech: ["React", "AI/ML", "TTS", "STT"],
      category: "Full-Stack",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Medicine Delivery Platform",
      description: "Oracle Apex-based platform with AI-powered routing system",
      tech: ["Oracle Apex", "AI", "Low-Code"],
      category: "Oracle Apex",
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  const achievements = [
    { icon: "🏆", title: "Rank 3 - National Hackhazards Hackathon", subtitle: "ScreenPipe Project", color: "from-yellow-400 to-orange-500" },
    { icon: "🥈", title: "Rank 3 - Oracle Low-Code Hackathon", subtitle: "April 2025", color: "from-gray-400 to-gray-600" },
    { icon: "🎓", title: "8+ Salesforce Trailhead Badges", subtitle: "Certified Developer", color: "from-blue-400 to-blue-600" },
    { icon: "🧠", title: "200+ Problems Solved", subtitle: "Leetcode & GFG", color: "from-green-400 to-green-600" }
  ];

  const certifications = [
    "Alibaba Cloud Certified Developer (Sept 2024)",
    "Oracle Academy: Database Design",
    "Cisco Cybersecurity & Network Essentials"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Enhanced Floating Background Elements with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" 
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000" 
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      {/* Enhanced Modern Navigation with Scroll Effects */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 transform ${
        scrollY > 50 
          ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Refined Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative bg-white/95 dark:bg-gray-900/95 rounded-lg px-3 py-1.5 border border-gray-200/30 dark:border-gray-700/30 backdrop-blur-lg shadow-sm">
                  <h1 className="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Shatakshi Gupta
                  </h1>
                </div>
              </div>
            </div>

            {/* Refined Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 rounded-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
                  <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{item.label}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </div>

            {/* Refined Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100/60 dark:bg-gray-800/60 rounded-lg px-3 py-1.5 backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 shadow-sm">
                <span className="text-sm">🌙</span>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600 scale-75"
                />
                <span className="text-sm">☀️</span>
              </div>

              <button
                className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 shadow-sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? 
                  <X className="h-4 w-4 text-gray-700 dark:text-gray-300" /> : 
                  <Menu className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl animate-slide-in-right">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-blue-600/20"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section with Parallax Effects */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div 
            className="scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            {/* Enhanced Floating Badge with Better Balance */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-xl border border-emerald-500/20 mb-12 shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 group cursor-pointer hover:scale-105">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-60"></div>
              </div>
              <Sparkles className="h-3 w-3 text-emerald-500 group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-xs font-semibold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available for opportunities
              </span>
              <Heart className="h-3 w-3 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Hi, I'm Shatakshi
            </h1>
            
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              A Full-Stack Developer passionate about AI, Software Engineering & Innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-500 px-10 py-5 text-lg rounded-2xl"
                onClick={handleResumeDownload}
              >
                <Download className="mr-3 h-6 w-6" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600/30 text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:border-blue-600/50 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-500 px-10 py-5 text-lg backdrop-blur-sm rounded-2xl"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Let's Connect
              </Button>
            </div>

            {/* Enhanced Stats with Scroll Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "10+", label: "Projects Completed" },
                { number: "5+", label: "Technologies Mastered" }
              ].map((stat, index) => (
                <div key={index} className="text-center group scroll-animate opacity-0 transform translate-y-8 transition-all duration-700" style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Scroll Animations */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50/80 to-blue-50/40 dark:from-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Main About Card with Scroll Animation */}
            <Card className="hover:shadow-2xl transition-all duration-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:scale-105 transform mb-12 scroll-animate opacity-0 translate-y-8">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Who I Am</h3>
                        <p className="text-gray-600 dark:text-gray-300">Passionate Full-Stack Developer</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                      I'm currently pursuing B.Sc. in Computer Science at Gyan Ganga Institute of Technology & Sciences with a <span className="font-bold text-blue-600">GPA of 8.33</span>. 
                      I specialize in building scalable web applications, AI-powered tools, and enterprise solutions using modern technologies.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      With <span className="font-bold text-purple-600">3+ years of experience</span> and multiple hackathon wins, I love turning complex problems into elegant digital solutions.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Problems Solved</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">10+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Projects Built</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">2</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Hackathon Wins</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl backdrop-blur-sm">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">8+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Certifications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Features Grid with Staggered Animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sparkles, title: "AI Integration Expert", desc: "Specialized in building AI-powered applications with intelligent automation, real-time processing, and machine learning integration.", gradient: "from-blue-600 to-purple-600" },
                { icon: Code, title: "Full-Stack Mastery", desc: "End-to-end development expertise from React frontends to Spring Boot backends, with cloud deployment and database optimization.", gradient: "from-green-600 to-blue-600" },
                { icon: BookOpen, title: "Low-Code Innovation", desc: "Oracle Apex specialist delivering enterprise solutions rapidly with advanced low-code development and custom integrations.", gradient: "from-purple-600 to-pink-600" },
                { icon: Trophy, title: "Competitive Programmer", desc: "Strong algorithmic thinking with 200+ problems solved on LeetCode and GeeksforGeeks, excelling in data structures and algorithms.", gradient: "from-orange-600 to-red-600" },
                { icon: Star, title: "Innovation Leader", desc: "Award-winning developer with multiple hackathon victories, creating solutions that bridge technology gaps and solve real-world problems.", gradient: "from-teal-600 to-green-600" },
                { icon: Award, title: "Certified Professional", desc: "Multiple industry certifications including Alibaba Cloud, Oracle, Cisco, and 8+ Salesforce Trailhead badges demonstrating commitment to excellence.", gradient: "from-indigo-600 to-purple-600" }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section with Scroll Animation */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-700 hover:-translate-y-8 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-700`} />
                <CardContent className="p-8 relative z-10">
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">{achievement.icon}</div>
                  <h3 className="font-bold mb-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with Scroll Animation */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-500 transform hover:scale-110 cursor-pointer shadow-md"
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
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

      {/* Enhanced Projects Section with Premium Background for Featured Projects */}
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Enhanced Background for Featured Projects */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
          
          {/* Floating orbs for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" 
               style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" 
               style={{ transform: `translateY(${scrollY * -0.05}px)` }} />
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-2000" 
               style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-2xl">Featured Projects</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-white to-blue-300 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
            <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative solutions that demonstrate technical excellence and creative problem-solving
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`transition-all duration-700 hover:-translate-y-8 group overflow-hidden relative scroll-animate opacity-0 translate-y-8 ${
                project.featured 
                  ? 'bg-white/15 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 hover:bg-white/20' 
                  : 'bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-purple-500/20'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                {project.featured && (
                  <>
                    {/* Enhanced featured badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl animate-pulse">
                        <Star className="h-4 w-4" />
                        Featured Project
                        <Zap className="h-4 w-4" />
                      </div>
                    </div>
                    
                    {/* Glow effect for featured projects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  </>
                )}
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className={`font-medium ${
                      project.featured 
                        ? 'border-white/40 bg-white/20 text-white' 
                        : 'border-blue-600/30 bg-blue-600/10 text-blue-600'
                    }`}>
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className={`transition-all duration-500 ${
                        project.featured 
                          ? 'hover:bg-white/20 text-white hover:scale-110' 
                          : 'hover:bg-blue-600/10 hover:scale-110'
                      }`}>
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className={`transition-all duration-500 ${
                        project.featured 
                          ? 'hover:bg-white/20 text-white hover:scale-110' 
                          : 'hover:bg-purple-600/10 hover:scale-110'
                      }`}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className={`text-xl transition-all ${
                    project.featured 
                      ? 'text-white group-hover:text-blue-200' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                  }`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`leading-relaxed ${
                    project.featured 
                      ? 'text-blue-100' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className={`text-xs transition-transform duration-300 hover:scale-110 ${
                        project.featured 
                          ? 'bg-white/20 text-white border-white/30' 
                          : ''
                      }`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section with Scroll Animation */}
      <section id="experience" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:scale-105 transform scroll-animate opacity-0 translate-y-8">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Briefcase className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Freelance Full-Stack Developer</h3>
                    <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 font-medium">Jan 2025 - Feb 2025</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      Architected platform using Java/React, integrated Stripe API, deployed on AWS with MySQL database. 
                      Delivered scalable solutions with modern tech stack.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section with Scroll Animation */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with Premium Background */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Enhanced Background for Contact Section */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 animate-gradient" />
          
          {/* Floating orbs for visual interest */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/25 to-blue-500/25 rounded-full blur-3xl animate-pulse" 
               style={{ transform: `translateY(${scrollY * 0.12}px)` }} />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse delay-1500" 
               style={{ transform: `translateY(${scrollY * -0.08}px)` }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/25 to-green-500/25 rounded-full blur-3xl animate-pulse delay-3000" 
               style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 scroll-animate opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-2xl">Contact Me</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-white to-green-300 mx-auto rounded-full heading-underline opacity-0 scale-x-0 origin-center transition-all duration-1000 ease-out" />
            <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              Let's connect and create something amazing together
            </p>
          </div>
          
          {/* Philosophy Section with Enhanced Styling */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="hover:shadow-2xl transition-all duration-700 bg-white/15 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl scroll-animate opacity-0 translate-y-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">My Philosophy</h3>
                <p className="text-lg leading-relaxed text-blue-100 mb-4">
                  As an open source contributor, I believe in the power of collaborative development and knowledge sharing. 
                  Contributing to open source projects has not only enhanced my technical skills but also taught me the 
                  importance of building solutions that benefit the entire community.
                </p>
                <p className="text-lg leading-relaxed text-blue-100">
                  I'm passionate about creating innovative solutions that bridge technology gaps and solve real-world problems, 
                  while fostering an environment of continuous learning and growth.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Enhanced Contact Form */}
            <Card className="hover:shadow-2xl transition-all duration-700 bg-white/15 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl scroll-animate opacity-0 translate-y-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white drop-shadow-lg">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/20 dark:bg-white/10 border-white/30 text-white placeholder:text-blue-200 backdrop-blur-sm focus:border-green-400 transition-all duration-500"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/20 dark:bg-white/10 border-white/30 text-white placeholder:text-blue-200 backdrop-blur-sm focus:border-green-400 transition-all duration-500"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/20 dark:bg-white/10 border-white/30 text-white placeholder:text-blue-200 backdrop-blur-sm focus:border-green-400 transition-all duration-500"
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-500 py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <Card className="hover:shadow-2xl transition-all duration-700 bg-white/15 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: '200ms' }}>
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl mb-8 text-white drop-shadow-lg">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <a href="mailto:shatakshig2005@gmail.com" className="hover:text-green-400 transition-colors text-blue-100 font-medium">
                        shatakshig2005@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <a href="tel:+919981599184" className="hover:text-blue-400 transition-colors text-blue-100 font-medium">
                        +91 9981599184
                      </a>
                    </div>
                  </div>
                  <Separator className="my-8 bg-white/20" />
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="border-white/40 bg-white/20 text-white hover:bg-white/30 hover:border-white/60 transition-all duration-500 backdrop-blur-sm hover:scale-110">
                      <a href="https://github.com/Shatakshi-gupta-ggits" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="border-white/40 bg-white/20 text-white hover:bg-white/30 hover:border-white/60 transition-all duration-500 backdrop-blur-sm hover:scale-110">
                      <a href="https://www.linkedin.com/in/shatakshi1" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Dark Theme */}
      <footer className="py-12 bg-gray-900 dark:bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center scroll-animate opacity-0 transform translate-y-8 transition-all duration-1000">
          <p className="text-white font-medium text-lg drop-shadow-lg">
            © 2025 Shatakshi Gupta. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
