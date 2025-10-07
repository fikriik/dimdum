import { Button } from "@/components/ui/button"

const WA_LINK = "https://wa.me/6285723991081?text=Halo%20DimDum%20%2C%20saya%20ingin%20pesan%20dimsum."

export function CtaBanner() {
  return (
    <section className="py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-balance">Siap pesan dimsum hangat hari ini?</h3>
        <Button asChild variant="secondary" className="text-foreground">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Pesan dimsum via WhatsApp">
            Pesan via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
