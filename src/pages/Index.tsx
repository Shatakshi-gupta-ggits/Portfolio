
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Trophy, Award, Code, Briefcase, User, BookOpen, MessageCircle, Menu, X, Star, Sparkles } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      featured: false
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
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Shatakshi Gupta
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>

            {/* Enhanced Controls */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-sm">🌙</span>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <span className="text-sm">☀️</span>
              </div>

              <button
                className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5 text-gray-700 dark:text-gray-300" /> : <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full backdrop-blur-sm border border-blue-600/20 mb-8 animate-bounce-slow">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Hi, I'm Shatakshi
            </h1>
            
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              A Full-Stack Developer passionate about AI, Software Engineering & Innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-600/30 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:border-blue-600/50 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm">
                <MessageCircle className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "10+", label: "Projects Completed" },
                { number: "5+", label: "Technologies Mastered" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50/80 to-blue-50/40 dark:from-gray-800/80 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:scale-105 transform">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl leading-relaxed bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                      I'm currently pursuing B.Sc. in Computer Science at Gyan Ganga Institute of Technology & Sciences with a GPA of 8.33. 
                      I specialize in building scalable web apps, AI-powered tools, and low-code enterprise apps using Oracle Apex. 
                      I've won national-level hackathons and love building tools that solve real problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-md"
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

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-gray-50/80 to-purple-50/40 dark:from-gray-800/80 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative ${project.featured ? 'lg:col-span-1 md:col-span-1' : ''}`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-blue-600/30 bg-blue-600/10 text-blue-600 font-medium">{project.category}</Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="hover:bg-blue-600/10 hover:scale-110 transition-all duration-300">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-purple-600/10 hover:scale-110 transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:scale-105 transition-transform duration-200">
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

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:scale-105 transform">
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

      {/* Enhanced Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50/80 to-pink-50/40 dark:from-gray-800/80 dark:to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardContent className="p-8 relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                  <h3 className="font-bold mb-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50/80 to-blue-50/40 dark:from-gray-800/80 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Me</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Enhanced Contact Form */}
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm focus:border-blue-500 transition-all duration-300"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm focus:border-blue-500 transition-all duration-300"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm focus:border-blue-500 transition-all duration-300"
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <Card className="hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <a href="mailto:shatakshig2005@gmail.com" className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300 font-medium">
                        shatakshig2005@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <a href="tel:+919981599184" className="hover:text-green-600 transition-colors text-gray-700 dark:text-gray-300 font-medium">
                        +91 9981599184
                      </a>
                    </div>
                  </div>
                  <Separator className="my-8" />
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="border-gray-300/50 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:border-blue-600/50 transition-all duration-300 backdrop-blur-sm">
                      <a href="https://github.com/Shatakshi-gupta-ggits" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="border-gray-300/50 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:border-blue-600/50 transition-all duration-300 backdrop-blur-sm">
                      <a href="https://linkedin.com/in/shatakshi1" target="_blank" rel="noopener noreferrer">
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

      {/* Enhanced Footer */}
      <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="container mx-auto px-4 text-center">
          <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium text-lg">
            © 2025 Shatakshi Gupta. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
