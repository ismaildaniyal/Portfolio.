"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const skills = {
  frontend: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 70 },
    { name: "C#", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Python", level: 70 },
    { name: "C++", level: 90 },
    { name: "Django", level: 85 },
    { name: "REST API", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "Oracle", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 50 },
  ],
  devops: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "CI/CD", level: 70 },
    { name: "Vercel", level: 80 },
  ],
  soft: [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Skills & Tech Stack"
          subtitle="A comprehensive overview of my technical skills and proficiency levels."
        />

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {["frontend", "backend", "database", "devops", "soft"].map((tab) => (
              <TabsTrigger key={tab} value={tab} className="relative overflow-hidden group">
                <span className="capitalize">{tab}</span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-primary scale-x-0 group-data-[state=active]:scale-x-100 transition-transform"
                  layoutId="skills-tab-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="frontend" className="space-y-6">
            <SkillBars skills={skills.frontend} />
          </TabsContent>

          <TabsContent value="backend" className="space-y-6">
            <SkillBars skills={skills.backend} />
          </TabsContent>

          <TabsContent value="database" className="space-y-6">
            <SkillBars skills={skills.database} />
          </TabsContent>

          <TabsContent value="devops" className="space-y-6">
            <SkillBars skills={skills.devops} />
          </TabsContent>

          <TabsContent value="soft" className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function SkillBars({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

