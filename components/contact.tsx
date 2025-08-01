"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-muted/10 to-muted/30 relative"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          
           <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-sky-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                  <div className="text-muted-foreground">semini.22@cse.mrt.ac.lk</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Phone</div>
                  <div className="text-muted-foreground">+94 76 812 8715</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Location</div>
                  <div className="text-muted-foreground">No. 108/3C, Elliot Road , Galle</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
