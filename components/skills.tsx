import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <section id="technologies" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card shadow-md rounded-2xl p-6 sm:p-10 border border-border">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 text-transparent bg-clip-text">
            Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
            {[
              { src: "/python.jpeg", alt: "Python" },
              { src: "/java.jpeg", alt: "Java" },
              { src: "/c++.jpeg", alt: "C++" },
              { src: "/javascript.jpeg", alt: "JavaScript" },
              { src: "/react.jpeg", alt: "React" },
              { src: "/Vue_js.jpeg", alt: "Vue.js" },
              { src: "/NodeJS logo.jpeg", alt: "Node.js" },
              { src: "/FastAPI.jpeg", alt: "FastAPI" },
              { src: "/Express.jpeg", alt: "Express" },
              { src: "/MySQL.jpeg", alt: "MySQL" },
              { src: "/PostgreSQL.jpeg", alt: "PostgreSQL" },
              { src: "/MongoDB.jpeg", alt: "MongoDB" },
              { src: "/solidity.jpeg", alt: "Solidity" },
              { src: "/Ethereum.jpeg", alt: "Ethereum" },
              { src: "/metamask.jpeg", alt: "Metamask" },
              { src: "/Git.jpeg", alt: "Git" },
              { src: "/nextjs.jpeg", alt: "Next.js" },
              { src: "/Tailwind.jpeg", alt: "Tailwind CSS" },
            ].map(({ src, alt }) => (
              <div
  key={alt}
  className="flex flex-col items-center space-y-3"
>
  <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden pink-purple-glow hover:scale-105 transition-transform duration-300">
    <img
      src={src}
      alt={alt}
      title={alt}
      className="object-cover w-full h-full rounded-xl"
    />
  </div>
  <span className="text-base font-medium text-center text-muted-foreground">
    {alt}
  </span>
</div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
