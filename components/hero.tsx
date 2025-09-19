import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-muted">
      <div className="absolute inset-0">
        <img
          src="/traditional-indian-costumes-and-cultural-dresses-d.jpg"
          alt="Traditional costumes and cultural dresses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-balance">
          Rent Costumes for Every Occasion
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
          Annual functions | School Events | Janmashtami | Navratri | Fancy Dress
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Book Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            View Costumes
          </Button>
        </div>
      </div>
    </section>
  )
}
