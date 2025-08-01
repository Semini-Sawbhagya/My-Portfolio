import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AI-Driven Music Genre and Mood Classification with Personalized Playlist Generation",
      description:
        "Developed a music mood and genre classification app with personalized playlist generation using deep learning.",
      image: "/music.jpeg?height=300&width=400",
      technologies: [" JavaScript", "React.js", "Vue.js", "Python", "Node.js", "TensorFlow", "Keras", "Librosa", "NumPy", "PostgreSQL", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: " Aswanna - Blockchain Agriculture Platform",
      description:
        "Web platform connecting farmers for collaboration and agricultural services.",
      image: "/A1.png?height=300&width=400",
      technologies: ["React", "Framer Motion", "React Router", "FastAPI", "SQLAlchemy", "PostgreSQL", "WebSocket", "Solidity", "Gemini", "Tavily"],
      githubUrl: "https://github.com/SpamBytes-Telexa/Aswanna---",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "SuwaDiwiya – Smart Digital Health Companion",
      description:
        "Provides citizens with faster, more reliable access to healthcare during emergencies.",
      image: "/1.png?height=300&width=400",
      technologies: ["React", "React Router", "FastAPI", "MySQL", "MongoDB", "Gemini", "Tavily"],
      githubUrl: "https://github.com/Lakshani09DL/Suwadiviya",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Core Banking Solution (CBS)",
      description:
        "Platform designed to streamline and optimize core banking functions.",
      image: "/bank.jpeg?height=300&width=400",
      technologies: ["React", "React Router", "FastAPI", "MySQL", "JWT"],
      githubUrl: "https://github.com/Cybernetica5/Banking-System/tree/phase2",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Uni Nest – Boarding Finder for University Students",
      description:
        "Helps students find, filter, and manage boarding places based on price, type, and location.",
      image: "/2.png?height=300&width=400",
      technologies: ["React", "React Router", "FastAPI", "MySQL", "JWT"],
      githubUrl: "https://github.com/Semini-Sawbhagya/uni-nest",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "NanoProcessor – 4-bit Processor Simulation",
      description:
        "Designed a functional 4-bit nano processor using VHDL, simulated on Xilinx Vivado.",
      image: "/nano.jpeg?height=300&width=400",
      technologies: ["VHDL", "Xilinx Vivado"],
      githubUrl: "https://lnkd.in/gdEX9BSa",
      liveUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          
           <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-sky-500 text-transparent bg-clip-text">
          Projects
        </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:scale-[1.02] relative"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs hover:bg-primary/10 transition-colors bg-background/50 backdrop-blur-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover:bg-primary/5 transition-all duration-300 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
