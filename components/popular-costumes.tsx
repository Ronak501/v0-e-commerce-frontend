import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const costumes = [
  {
    id: 1,
    name: "Krishna Dress",
    image: "/krishna-costume-traditional-indian-dress-with-peac.jpg",
    category: "Traditional",
    description: "Complete Krishna outfit with accessories",
  },
  {
    id: 2,
    name: "Navratri Outfit",
    image: "/navratri-traditional-gujarati-dress-colorful-chani.jpg",
    category: "Festival",
    description: "Beautiful Navratri chaniya choli",
  },
  {
    id: 3,
    name: "School Drama Dress",
    image: "/school-drama-costume-historical-character-dress.jpg",
    category: "Drama",
    description: "Perfect for school annual functions",
  },
  {
    id: 4,
    name: "Drama Fest Dress",
    image: "/drama-festival-costume-theatrical-character-outfit.jpg",
    category: "Drama",
    description: "Professional drama costumes",
  },
  {
    id: 5,
    name: "Freedom Fighters Costume",
    image: "/indian-freedom-fighter-costume-gandhi-nehru-histor.jpg",
    category: "Historical",
    description: "Historical freedom fighter outfits",
  },
  {
    id: 6,
    name: "Animal Costume",
    image: "/animal-costume-for-kids-lion-tiger-elephant-fancy-.jpg",
    category: "Fancy Dress",
    description: "Various animal costumes for kids",
  },
]

export function PopularCostumes() {
  return (
    <section id="costumes" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-light mb-4">Popular Costumes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our wide range of traditional and cultural costumes for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {costumes.map((costume) => (
            <Card key={costume.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                  <img
                    src={costume.image || "/placeholder.svg"}
                    alt={costume.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{costume.category}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-2">{costume.name}</h3>
                  <p className="text-muted-foreground mb-4">{costume.description}</p>
                  <Button className="w-full">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
