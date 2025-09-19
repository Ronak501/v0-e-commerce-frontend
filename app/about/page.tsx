import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Calendar, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-light mb-6">About Patel Dresswala</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for costume rentals and annual function contracts since many years
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-light mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  <strong className="text-foreground">PATEL DRESSWALA</strong> is your go-to destination for renting
                  traditional and cultural costumes for kids and adults. We have been serving the community with
                  high-quality costumes for various occasions and events.
                </p>
                <p className="mb-4">
                  We specialize in providing complete costume solutions for annual functions, school events, cultural
                  programs, and festivals. Our extensive collection ensures that you find the perfect outfit for any
                  occasion.
                </p>
                <p>
                  We take contracts for <strong className="text-foreground">ANNUAL FUNCTIONS</strong> and provide
                  comprehensive costume solutions for educational institutions and cultural organizations.
                </p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Patel Dresswala costume collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h3 className="text-2xl font-bold mb-1">1000+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h3 className="text-2xl font-bold mb-1">500+</h3>
                <p className="text-muted-foreground">Events Covered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <h3 className="text-2xl font-bold mb-1">300+</h3>
                <p className="text-muted-foreground">Costume Varieties</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
                <h3 className="text-2xl font-bold mb-1">5 Star</h3>
                <p className="text-muted-foreground">Customer Rating</p>
              </CardContent>
            </Card>
          </div>

          {/* Specialities */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-light text-center mb-8">Our Specialities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Traditional & Cultural</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Krishna Dress</Badge>
                    <Badge variant="outline">Radha Costume</Badge>
                    <Badge variant="outline">Traditional Wear</Badge>
                    <Badge variant="outline">Cultural Outfits</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Festival Costumes</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Navratri</Badge>
                    <Badge variant="outline">Janmashtami</Badge>
                    <Badge variant="outline">Garba</Badge>
                    <Badge variant="outline">Dandiya</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">School Events</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Annual Functions</Badge>
                    <Badge variant="outline">Drama</Badge>
                    <Badge variant="outline">Play</Badge>
                    <Badge variant="outline">School Events</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Fancy Dress</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Animals</Badge>
                    <Badge variant="outline">Birds</Badge>
                    <Badge variant="outline">Fruits</Badge>
                    <Badge variant="outline">Vegetables</Badge>
                    <Badge variant="outline">Flowers</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
