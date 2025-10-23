import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ImageSlider } from "@/components/image-slider"
import { EMIOptions } from "@/components/emi-options"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ImageSlider />
      <EMIOptions />
      <Download />
      <Footer />
    </main>
  )
}
