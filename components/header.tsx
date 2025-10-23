"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">MP</span>
            </div>
            <span className="text-xl font-bold text-foreground">Money Pocket</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition">
              Features
            </a>
            <a href="#emi" className="text-foreground hover:text-primary transition">
              EMI Plans
            </a>
            <a href="#download" className="text-foreground hover:text-primary transition">
              Download
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#features" className="text-foreground hover:text-primary transition">
              Features
            </a>
            <a href="#emi" className="text-foreground hover:text-primary transition">
              EMI Plans
            </a>
            <a href="#download" className="text-foreground hover:text-primary transition">
              Download
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
