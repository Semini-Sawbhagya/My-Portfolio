import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HonoursAndAwards() {
  const competitions = [
    {
      title: "Technovation 2025 - 2nd Runner Up",
      images: [
        "/technovation.jpeg",
        "/technovation2.jpeg",
        "/technovation3.jpeg",
        "/technovation4.jpeg",
      ],
      description:
        "Achieved 2nd Runner-Up in the Technovation 2025 Ideathon organized by SLT Mobitel, competing among 60+ university teams. I’m incredibly proud to have led our brilliant team in developing and pitching a custom healthcare management system tailored for Sri Lanka, integrated with a virtual AI assistant to enhance accessibility and patient care.",
    },
    {
      title: "HackElite 1.0 2024 - Top 7",
      images: [
        "/hackelite.jpeg",
        "/hackelite2.jpeg",
        "/hackelite3.jpeg",
        "/hackelite4.jpeg",
      ],
      description:
        "Ranked among the Top 7 teams in HackElite 1.0, an ideathon organized by the WIE Affinity Group of the University of Moratuwa. Our innovative concept and team collaboration helped us stand out in a highly competitive field.",
    },
    {
      title: "Hackventure 1.0 2024 - Semi Finalist",
      images: [
        "/hackventure.jpeg",
        "/hackventure2.jpeg",
        "/hackventure3.jpeg",
      ],
      description:
        "As our first-ever ideathon experience, we proudly reached the semifinals of Hackventure 1.0, organized by AIESEC, University of Kelaniya. Our team developed a smart companion mobile app that helps university students locate the nearest food stalls across campuses.",
    },
  ]

  return (
    <section id="honours-awards" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-sky-500 text-transparent bg-clip-text">
          Honours and Awards
        </h2>

        {competitions.map(({ title, images, description }) => (
          <Card
            key={title}
            className="bg-card shadow-xl rounded-3xl p-8 sm:p-12 border border-border hover:shadow-2xl transition-shadow duration-500"
          >
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  >
                    <img
                      src={src}
                      alt={`${title} image ${index + 1}`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
