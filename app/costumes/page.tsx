import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const allCostumes = [
  {
    id: 1,
    name: "Krishna Dress",
    image: "/krishna-costume-with-peacock-feather-crown-and-flu.jpg",
    category: "Traditional",
    price: "₹500-800",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Complete Krishna outfit with dhoti, kurta, peacock feather crown, and flute",
  },
  {
    id: 2,
    name: "Radha Dress",
    image: "/radha-costume-traditional-indian-lehenga-with-jewe.jpg",
    category: "Traditional",
    price: "₹600-900",
    sizes: ["XS", "S", "M", "L"],
    description: "Beautiful Radha costume with lehenga, choli, and traditional jewelry",
  },
  {
    id: 3,
    name: "Navratri Chaniya Choli",
    image: "/navratri-chaniya-choli-colorful-gujarati-dress.jpg",
    category: "Festival",
    price: "₹400-700",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Vibrant Navratri outfit perfect for Garba and Dandiya",
  },
  {
    id: 4,
    name: "Mahatma Gandhi Costume",
    image: "/gandhi-costume-white-dhoti-kurta-with-round-glasse.jpg",
    category: "Historical",
    price: "₹300-500",
    sizes: ["S", "M", "L", "XL"],
    description: "Freedom fighter costume with dhoti, kurta, and accessories",
  },
  {
    id: 5,
    name: "Nehru Costume",
    image: "/nehru-costume-white-kurta-with-nehru-cap.jpg",
    category: "Historical",
    price: "₹350-550",
    sizes: ["S", "M", "L", "XL"],
    description: "Pandit Nehru costume with kurta, pajama, and Nehru cap",
  },
  {
    id: 6,
    name: "Lion Costume",
    image: "/lion-costume-for-kids-with-mane-and-tail.jpg",
    category: "Animal",
    price: "₹250-400",
    sizes: ["XS", "S", "M"],
    description: "Adorable lion costume perfect for fancy dress competitions",
  },
  {
    id: 7,
    name: "Tiger Costume",
    image: "/tiger-costume-with-stripes-and-tail-for-kids.jpg",
    category: "Animal",
    price: "₹250-400",
    sizes: ["XS", "S", "M"],
    description: "Striped tiger costume with headpiece and tail",
  },
  {
    id: 8,
    name: "Apple Costume",
    image: "/apple-fruit-costume-red-with-green-leaf.jpg",
    category: "Fruits",
    price: "₹200-350",
    sizes: ["XS", "S", "M"],
    description: "Cute apple costume for fruit-themed events",
  },
  {
    id: 9,
    name: "Banana Costume",
    image: "/placeholder.svg?height=400&width=300",
    category: "Fruits",
    price: "₹200-350",
    sizes: ["XS", "S", "M"],
    description: "Fun banana costume for fancy dress",
  },
  {
    id: 10,
    name: "Rose Flower Costume",
    image: "/placeholder.svg?height=400&width=300",
    category: "Flowers",
    price: "₹300-450",
    sizes: ["XS", "S", "M"],
    description: "Beautiful rose costume with petal details",
  },
  {
    id: 11,
    name: "Sunflower Costume",
    image: "/placeholder.svg?height=400&width=300",
    category: "Flowers",
    price: "₹300-450",
    sizes: ["XS", "S", "M"],
    description: "Bright sunflower costume with yellow petals",
  },
  {
    id: 12,
    name: "Doctor Costume",
    image: "/placeholder.svg?height=400&width=300",
    category: "Professional",
    price: "₹200-350",
    sizes: ["XS", "S", "M", "L"],
    description: "Doctor costume with white coat and medical accessories",
  },
]

const categories = ["All", "Traditional", "Festival", "Historical", "Animal", "Fruits", "Flowers", "Professional"]

export default function CostumesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-light mb-4">Our Costume Collection</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our extensive collection of costumes for every occasion and event
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-accent">
                {category}
              </Badge>
            ))}
          </div>

          {/* Costumes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCostumes.map((costume) => (
              <Card key={costume.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={costume.image || "/placeholder.svg"}
                      alt={costume.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{costume.category}</Badge>
                      <span className="text-sm font-semibold text-green-600">{costume.price}</span>
                    </div>
                    <h3 className="text-lg font-serif mb-2">{costume.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{costume.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {costume.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
