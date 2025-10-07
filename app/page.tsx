import { Navbar } from "@/components/dimsum/navbar"
import { Hero } from "@/components/dimsum/hero"
import { MenuGrid } from "@/components/dimsum/menu-grid"
// import { Pricing } from "@/components/dimsum/pricing"
import { Features } from "@/components/dimsum/features"
import { Testimonials } from "@/components/dimsum/testimonials"
// import { LocationSection } from "@/components/dimsum/location-section"
import { CtaBanner } from "@/components/dimsum/cta-banner"
import { Footer } from "@/components/dimsum/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="menu" className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance mb-6">
              Menu Favorit
            </h2>
            <MenuGrid />
          </div>
        </section>

        {/* 
        <section id="paket" className="py-12 md:py-16 bg-accent">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance mb-6">Paket Hemat</h2>
            <Pricing />
          </div>
        </section>
        */}

        <section id="keunggulan" className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance mb-6">
              Kenapa Pilih DIMDUM?
            </h2>
            <Features />
          </div>
        </section>

        <section id="testimoni" className="py-12 md:py-16 bg-accent">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance mb-6">
              Testimoni Pelanggan
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* Section lokasi dihilangkan */}
        {/*
        <section id="lokasi" className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance mb-6">Lokasi & Jam Buka</h2>
            <LocationSection />
          </div>
        </section>
        */}

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
