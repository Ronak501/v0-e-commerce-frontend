"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Phone } from "lucide-react"

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919898071530", "_blank")
  }

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-light mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg">Get in touch to book your costumes for any occasion</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Submit Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  placeholder="Event Type (Annual Function, Navratri, etc.)"
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Costume requirements and event details"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
                <Button type="submit" className="w-full">
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick response guaranteed</p>
                  </div>
                </div>
                <Button onClick={handleWhatsApp} className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Contact on WhatsApp: +91 98980 71530
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Call us directly</p>
                  </div>
                </div>
                <p className="text-lg font-mono">+91 98980 71530</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Our Specialities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Traditional & Cultural Costumes</li>
                  <li>• Annual Function Contracts</li>
                  <li>• School Drama & Play Costumes</li>
                  <li>• Festival Outfits (Navratri, Janmashtami)</li>
                  <li>• Fancy Dress (Animals, Birds, Fruits)</li>
                  <li>• Historical Character Costumes</li>
                  <li>• Western & Sports Dress</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
