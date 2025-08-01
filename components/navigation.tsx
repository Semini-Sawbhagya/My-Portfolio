"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-white/70 via-white/50 to-white/30 dark:from-zinc-900/70 dark:via-zinc-800/50 dark:to-zinc-900/30 backdrop-blur-xl border-b border-border/30 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Title */}
          <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent animate-gradient-slow">
            Semini
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium tracking-wide px-2 py-1 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-fuchsia-400 ${
                  activeSection === item.id ? "text-indigo-600 dark:text-fuchsia-400" : "text-muted-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-indigo-500 dark:bg-fuchsia-400 transition-all duration-300 ease-in-out group-hover:w-full ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-2 text-zinc-800 dark:text-white">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/40 bg-background/80 rounded-b-xl shadow-sm">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 px-4 text-base font-medium transition-colors rounded-md hover:text-indigo-600 dark:hover:text-fuchsia-400 ${
                    activeSection === item.id ? "text-indigo-600 dark:text-fuchsia-400 bg-muted/30" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
