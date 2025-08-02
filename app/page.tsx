import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { HonoursAndAwards } from "@/components/awards"
export default function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <HonoursAndAwards />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
