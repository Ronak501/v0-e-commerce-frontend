export function Categories() {
  const categories = [
    {
      name: "Evening Wear",
      image: "/elegant-evening-gown.png",
      description: "Sophisticated gowns for special occasions",
    },
    {
      name: "Casual Chic",
      image: "/casual-chic-dress.jpg",
      description: "Effortless style for everyday elegance",
    },
    {
      name: "Business Attire",
      image: "/professional-business-dress.jpg",
      description: "Professional pieces that command attention",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-balance">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            From boardroom to ballroom, find the perfect piece for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-2">{category.name}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
