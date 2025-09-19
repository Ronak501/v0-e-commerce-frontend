import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PopularCostumes } from "@/components/popular-costumes"
import { AboutUs } from "@/components/about-us"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PopularCostumes />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  )
}
