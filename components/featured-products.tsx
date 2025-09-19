import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Midnight Velvet Gown",
      price: "$299",
      image: "/midnight-blue-velvet-evening-gown.jpg",
      category: "Evening Wear",
    },
    {
      id: 2,
      name: "Silk Wrap Dress",
      price: "$189",
      image: "/silk-wrap-dress-in-neutral-tone.jpg",
      category: "Casual Chic",
    },
    {
      id: 3,
      name: "Tailored Blazer Dress",
      price: "$249",
      image: "/tailored-blazer-dress-professional.jpg",
      category: "Business Attire",
    },
    {
      id: 4,
      name: "Floral Midi Dress",
      price: "$159",
      image: "/floral-midi-dress-spring-collection.jpg",
      category: "Casual Chic",
    },
    {
      id: 5,
      name: "Cocktail Sequin Dress",
      price: "$329",
      image: "/sequin-cocktail-dress-party-wear.jpg",
      category: "Evening Wear",
    },
    {
      id: 6,
      name: "Linen Shirt Dress",
      price: "$129",
      image: "/linen-shirt-dress-summer-casual.jpg",
      category: "Casual Chic",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-balance">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Handpicked pieces that embody sophistication and style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-white/90">Quick View</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{product.category}</p>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-xl font-serif">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
