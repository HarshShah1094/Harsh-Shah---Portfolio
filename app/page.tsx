"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Database, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const projects = [
  {
    title: "HealthSync-Healthcare Management System",
    description: "Comprehensive healthcare management system with patient records, appointments, and medical data tracking",
      image: "/Screenshot (4).png",
    tech: ["Next.js","React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/HarshShah1094/HealthSync",
    live: "https://health-sync-two.vercel.app/"
  },
  {
    title: "Task Management App",
    description: "Advanced task management dashboard with analytics, priority tracking, and real-time progress monitoring",
    image: "/task-management-interface.png",
    tech: ["React", "TypeScript", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com/HarshShah1094/Task-Manager-",
    live: "#"
  },
    {
      title: "Optimouse – AI-Powered Hands-Free Navigation System",
      description: "AI-powered hands-free navigation system using computer vision and gesture recognition for accessibility",
      image: "/Demo1.mp4",
      tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "AI/ML"],
      github: "https://github.com/HarshShah1094/OptiMouse",
      live: "#"
    },
  {
    title: "Urban Axis",
    description: "A web app to simplify the process of finding suitable real estate properties with a responsive React.js frontend and Node.js backend.",
    image: "/Urban-Axis.png",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/HarshShah1094/Urban-Axis",
    live: "#"
  },
  {
    title: "Sabras Mukhvas",
    description: "Sabras is a comprehensive full-stack e-commerce application designed to facilitate seamless online shopping experiences. The platform offers robust functionalities for both users and administrators, ensuring efficient product management and secure transactions.",
    image: "/Subras_Mukhvas.png",
    tech: ["React", "Express.js", "Node.js", "JWT-Authentication"],
    github: "https://github.com/HarshShah1094/Sabras-Mukhvas---A-full-Stack-E-Commerce-Website",
    live: "#"
  }
]

const skills = [
  {
    category: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 }
    ]
  },
  {
    category: "Design",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "UI/UX", level: 88 },
    ]
  }
]

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const roles = [
    "Full-Stack Developer",
    "Problem Solver", 
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Software Engineer",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return null
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-blue-100 dark:border-blue-800/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">HS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-slate-700 dark:text-blue-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-600/30 dark:to-cyan-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 dark:from-indigo-600/30 dark:to-blue-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile_image.jpg"
                  alt="Harsh"
                  width={220}
                  height={220}
                  className="rounded-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-blue-100 dark:via-cyan-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 h-20 flex items-center justify-center"
            >
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 dark:text-blue-200 mb-8 max-w-2xl mx-auto"
            >
              I craft beautiful, functional web applications with modern technologies. 
              Passionate about clean code, user experience, and innovative solutions.
            </motion.p>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 dark:text-blue-100 transition-all duration-300">
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="mt-16"
            >
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-300"
                aria-label="Scroll to About section"
              >
                <ArrowDown className="w-6 h-6 mx-auto text-slate-400 dark:text-blue-400 animate-bounce" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/50 dark:to-purple-950/50 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-blue-100 dark:via-cyan-100 dark:to-purple-100 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-blue-800 dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-slate-600 dark:text-blue-200 mb-6 leading-relaxed">
              I’m full-stack web developer passionate about building impactful and user-friendly applications. Though I’m a fresher, I’ve worked on several real-world projects that strengthened my skills in designing scalable systems and creating smooth user experiences.
              </p>
              <p className="text-slate-600 dark:text-blue-200 mb-6 leading-relaxed">
              I love exploring new technologies, learning from challenges, and continuously improving my craft. Beyond coding, I enjoy collaborating on open-source projects, experimenting with new ideas, and sharing what I learn with others in the tech community.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/HarshShah1094"
                  className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 rounded-full hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-700/70 dark:hover:to-purple-700/70 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-blue-200" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/harsh-shah-7663772ab/"
                  className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 rounded-full hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-700/70 dark:hover:to-purple-700/70 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-slate-700 dark:text-blue-200" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:harsh.work1094@gmail.com"
                  className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 rounded-full hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-700/70 dark:hover:to-purple-700/70 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-slate-700 dark:text-blue-200" />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                  <Image
                    src="/developer-workspace.png"
                    alt="Developer workspace"
                    width={400}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 dark:from-blue-600/30 dark:to-cyan-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-300/20 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-blue-100 dark:via-cyan-100 dark:to-purple-100 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20 dark:border-blue-800/30"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skillCategory.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <skillCategory.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent text-center mb-4">
                  {skillCategory.category}
                </h3>
                
                <div className="space-y-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="text-center"
                    >
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 text-slate-700 dark:text-blue-200 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-700/70 dark:hover:to-purple-700/70 transition-all duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hexagonal Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-blue-100 dark:via-cyan-100 dark:to-purple-100 bg-clip-text text-transparent text-center mb-8">
              Technology Stack
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                { name: "React", color: "from-cyan-400 to-cyan-600" },
                { name: "Next.js", color: "from-slate-700 to-slate-900" },
                { name: "Node.js", color: "from-green-500 to-green-700" },
                { name: "Python", color: "from-yellow-500 to-yellow-700" },
                { name: "PostgreSQL", color: "from-blue-600 to-blue-800" },
                { name: "MongoDB", color: "from-green-600 to-green-800" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  className={`relative w-24 h-24 bg-gradient-to-br ${tech.color} cursor-pointer group`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xs text-center px-2">
                      {tech.name}
                    </span>
                  </div>
                  <div 
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/50 dark:to-purple-950/50 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-blue-100 dark:via-cyan-100 dark:to-purple-100 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-blue-800/30">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {project.image?.endsWith('.mp4') ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-slate-800 to-blue-800 dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">{project.title}</CardTitle>
                    <CardDescription className="dark:text-blue-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-blue-200 dark:border-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 dark:text-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild className="border-blue-200 dark:border-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 dark:text-blue-200">
                        <a href={project.github}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <a href={project.live}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-pink-300/20 dark:from-indigo-600/30 dark:to-pink-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-blue-100 dark:via-cyan-100 dark:to-purple-100 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-blue-200 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <motion.a
              href="mailto:harsh.work1094@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 bg-clip-text text-transparent mb-12">
              Let's build something together!
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:harsh.work1094@gmail.com"
                className="p-3 text-white hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/HarshShah1094"
                className="p-3 text-white hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/harsh-shah-7663772ab/"
                className="p-3 text-white hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/harsh"
                className="p-3 text-white hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://medium.com/@harsh"
                className="p-3 text-white hover:text-cyan-400 transition-colors"
                aria-label="Medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://harsh-portfolio.com"
                className="p-3 text-white hover:text-cyan-400 transition-colors"
                aria-label="Portfolio"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </motion.a>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2025 Harsh Shah
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
