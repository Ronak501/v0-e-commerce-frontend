import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-balance">Stay in Style</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and special offers
        </p>

        <div className="max-w-md mx-auto flex gap-4">
          <Input type="email" placeholder="Enter your email" className="bg-white text-black border-0" />
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
