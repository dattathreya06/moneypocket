"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">MP</span>
              </div>
              <span className="text-xl font-bold">Money Pocket</span>
            </div>
            <p className="text-background/70">Making loans accessible and affordable for everyone.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#emi" className="hover:text-background transition">
                  EMI Plans
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-background transition">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>1800-POCKET-1</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@moneypocket.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">© 2025 Money Pocket. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
