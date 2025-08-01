import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center">
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
            Semini Sawbhagya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science and Engineering undergraduate at the University of Moratuwa, driven by building full-stack solutions,
            learning continuously, and solving real-world problems through thoughtful software design.
          </p>
        </div>

        {/* Single Card Centered */}
        <div className="flex justify-center">
          <Card className="group border border-indigo-300/30 dark:border-zinc-700 shadow-md hover:shadow-xl transition-all duration-300 bg-white/40 dark:bg-zinc-800/30 backdrop-blur-xl rounded-xl max-w-sm mx-auto">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-indigo-500 dark:text-indigo-300">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                  University of Moratuwa
                </h4>
                <p className="text-sm text-muted-foreground">
                  BSc (Hons) in Computer Science and Engineering
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
                  Sanghamiththa Balika Vidyalaya, Galle
                </h4>
                <p className="text-sm text-muted-foreground">
                  G.C.E. A/L 2021: 3A (Z-Score: 2.4466) <br />
                  G.C.E. O/L 2018: 9A
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
