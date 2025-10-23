"use client"

import { CheckCircle, Zap, DollarSign, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Easy KYC",
    description: "Complete your verification in just 2 minutes with our simple and secure process",
  },
  {
    icon: DollarSign,
    title: "Less Processing Fee",
    description: "Industry-leading low fees that save you money on every loan application",
  },
  {
    icon: Zap,
    title: "Less Interest Rate",
    description: "Competitive interest rates starting from 9% per annum for eligible customers",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get funds transferred to your account within 24 hours of approval",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Bank-level security with RBI compliance and data encryption",
  },
  {
    icon: DollarSign,
    title: "Flexible EMI",
    description: "Choose from 3, 6, or 12-month EMI plans that fit your budget",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Money Pocket?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've simplified lending with features designed for your convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
