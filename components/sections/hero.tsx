"use client"

import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
export default function Hero() {
  const words = [
    { text: "I'm" },
    { text: "a" },
    { text: "passionate" },
    { text: "and" },
    { text: "aspiring" },
    // { text: "in" },
    { text: "Software", className: "text-primary" },
    { text: "Engineer", className: "text-primary" },
    
  ]

  return (
    <section id="home" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span>Ismail Daniyal</span>
          </motion.h1>
          <div className="h-12">
            <TypewriterEffect words={words} />
          </div>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
             I specialize in building accessible, user-friendly web applications using modern technologies like React, Next.js, TensorFlow, and Docker. <br />Passionate about solving complex problems with AI, Machine Learning, and Generative AI, and delivering innovative solutions through seamless collaboration and technical excellence.
             </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group">
            <a href="#projects">
              View My Projects
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                →
              </motion.span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="public/Muhammad Ismail Daniyal_Resume (3).pdf" download>
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            { icon: Github, href: "https://github.com/ismaildaniyal", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ismail-sarfraz/", label: "LinkedIn" },
            // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Mail, href: "mailto:ismailsarfraz9345@gmail.com", label: "Email" },
            
         
          ].map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <ThemeToggle />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

