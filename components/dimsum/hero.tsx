import { Button } from "@/components/ui/button"

const WA_LINK = "https://wa.me/6285723991081?text=Halo%20DimDum%20%2C%20saya%20ingin%20pesan%20dimsum."

export function Hero() {
  return (
    <section className="pt-10 md:pt-14 bg-background">
      <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            DIMDUM — Fresh, Halal, Lezat!
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Kami menyediakan dimsum dan dumpling lezat dengan harga terjangkau. Cocok jadi camilan atau makanan ringan, pas banget buat mahasiswa yang ingin makan enak tanpa ribet.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Pesan Sekarang
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#menu">Lihat Menu</a>
            </Button>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li>• 100% Halal</li>
            <li>• Fresh dibuat harian</li>
            <li>• Banyak Varian</li>
            <li>• Harga Mahasiswa</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <img
            src="/fotoasli.jpg"
            alt="Dimsum kukus hangat menggugah selera"
            className="w-full h-auto rounded-xl border"
          />
        </div>
      </div>
    </section>
  )
}
