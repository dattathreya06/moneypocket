"use client"

import { DownloadIcon, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Zap size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Fast & Secure Loans</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Get Instant Loans with <span className="text-primary">Money Pocket</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Experience hassle-free borrowing with easy KYC, minimal processing fees, and competitive interest rates.
                Get approved in minutes!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                <DownloadIcon size={20} />
                Download APP
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">₹100Cr+</p>
                <p className="text-sm text-muted-foreground">Loans Disbursed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.8★</p>
                <p className="text-sm text-muted-foreground">App Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-8 flex items-center justify-center h-full">
              <div className="text-center text-primary-foreground">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-xl font-semibold">Money Pocket App</p>
                <p className="text-sm opacity-90">Available on Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
