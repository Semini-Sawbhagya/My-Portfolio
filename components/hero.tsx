"use client"

import githubIcon from "@/public/github.jpeg"
import linkedinIcon from "@/public/linkedin.jpeg"
import emailIcon from "@/public/email.jpeg"
import Image from "next/image"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react"
import profile from "@/public/I.jpg"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-1000 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-fuchsia-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-sky-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-fuchsia-300/10 to-indigo-300/10 rounded-full blur-[180px]" />
      </div>

      {/* Main Content */}
      {/* Main Content */}
<div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 z-10">
  {/* Left Section – Text (2/3 width) */}
  <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6 animate-fade-in-up">
    <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
      Hi, I'm{" "}
      <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent animate-gradient-slow">
        Semini Sawbhagya
      </span>
    </h1>

   <ul className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl space-y-4 leading-relaxed">
  {[
    "Computer Science undergraduate at University of Moratuwa",
    "Passionate about full-stack development and AI",
    "Always eager to learn and innovate with emerging technologies",
    "Enjoys working in collaborative and diverse tech teams",
  ].map((item, index) => {
    const highlights = ["full-stack development", "AI"]

    // Split and wrap highlights
    const tokens = []
    let remaining = item
    let keyCounter = 0

    while (remaining.length > 0) {
      const nextMatch = highlights
        .map((word) => ({
          word,
          index: remaining.indexOf(word),
        }))
        .filter(({ index }) => index !== -1)
        .sort((a, b) => a.index - b.index)[0]

      if (!nextMatch) {
        tokens.push(remaining)
        break
      }

      const { word, index } = nextMatch
      if (index > 0) {
        tokens.push(remaining.slice(0, index))
      }

      tokens.push(
        <span
          key={`highlight-${keyCounter++}`}
          className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent font-semibold"
        >
          {word}
        </span>
      )

      remaining = remaining.slice(index + word.length)
    }

    return (
      <li key={index} className="relative pl-6">
        <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-500"></span>
        {tokens}
      </li>
    )
  })}
</ul>



    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button
        size="lg"
        className="text-lg px-8 bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <span className="group-hover:scale-105 transition-transform">View My Work</span>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="text-lg px-8 border-2 border-indigo-400 hover:bg-indigo-50 dark:hover:bg-zinc-800/40 transition-all duration-300 group"
      >
        <Download className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-300 group-hover:scale-110 transition-transform" />
        Download Resume
      </Button>
    </div>
{/* Social Icons */}
<div className="flex justify-center lg:justify-start space-x-6 mt-6">
  <a href="https://github.com/Semini-Sawbhagya" target="_blank" rel="noopener noreferrer">
    <Button
  variant="ghost"
  size="icon"
  className="h-14 w-14 rounded-full overflow-hidden hover:scale-110 transition-all duration-300 group bg-indigo-100/20 dark:bg-zinc-800/50"
>
  <Image
    src={githubIcon}
    alt="GitHub"
    className="w-full h-full object-cover rounded-full"
    width={56}
    height={56}
  />
</Button>

  </a>

  <a href="https://linkedin.com/in/semini-sawbhagya-6a64a72a5" target="_blank" rel="noopener noreferrer">
    <Button
  variant="ghost"
  size="icon"
  className="h-14 w-14 rounded-full overflow-hidden hover:scale-110 transition-all duration-300 group bg-indigo-100/20 dark:bg-zinc-800/50"
>
  <Image
    src={linkedinIcon}
    alt="LinkedIn"
    className="w-full h-full object-cover rounded-full"
    width={56}
    height={56}
  />
</Button>

  </a>
<a href="mailto:semini.22@cse.mrt.ac.lk">
  <Button
  variant="ghost"
  size="icon"
  className="h-14 w-14 rounded-full overflow-hidden hover:scale-110 transition-all duration-300 group bg-indigo-100/20 dark:bg-zinc-800/50"
>
  <Image
    src={emailIcon}
    alt="Email"
    className="w-full h-full object-cover rounded-full"
    width={56}
    height={56}
  />
</Button>
</a>
</div>

    <div className="mt-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToAbout}
        className="animate-bounce hover:animate-none hover:scale-110 transition-transform"
      >
        <ArrowDown className="h-6 w-6 text-zinc-800 dark:text-white" />
      </Button>
    </div>
  </div>

  {/* Right Section – Image (1/3 width) */}
  <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-fade-in-up">
    <div className="relative w-full max-w-sm mx-auto shadow-md rounded-xl overflow-hidden">
  <Image
    src={profile}
    alt="Semini Sawbhagya"
    className="w-full h-auto object-cover"
    priority
  />
</div>

  </div>
</div>
    </section>
  )
}