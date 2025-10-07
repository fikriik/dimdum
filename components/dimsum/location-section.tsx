import { Card, CardContent } from "@/components/ui/card"

export function LocationSection() {
  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Alamat</h3>
            <p className="text-sm text-muted-foreground mt-1">Jl. Contoh No. 123, Kota Anda</p>
            <a
              href="https://maps.google.com?q=Jl.%20Contoh%20No.%20123"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm underline"
              aria-label="Buka peta di Google Maps"
            >
              Lihat di Google Maps
            </a>

            <h3 className="text-lg font-semibold mt-6">Jam Buka</h3>
            <ul className="text-sm text-muted-foreground mt-1">
              <li>Sen–Jum: 10.00–21.00</li>
              <li>Sab–Min: 10.00–22.00</li>
            </ul>
          </div>

          <div className="rounded-lg border p-2">
            <img
              src="/gerai-dimsum-ayyub.jpg"
              alt="Tampilan gerai DIMDUM"
              className="w-full h-60 object-cover rounded-md"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
