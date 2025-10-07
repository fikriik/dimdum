import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WA_LINK = "https://wa.me/6281234567890?text=Halo%20Dimsum%20Ayyub%2C%20saya%20ingin%20pesan%20paket."

const packs = [
  {
    name: "Paket Hemat",
    desc: "10 pcs campur",
    price: "Rp35.000",
  },
  {
    name: "Paket Keluarga",
    desc: "25 pcs campur",
    price: "Rp80.000",
  },
  {
    name: "Paket Catering",
    desc: "100 pcs campur",
    price: "Rp300.000",
  },
]

export function Pricing() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {packs.map((p) => (
        <Card key={p.name} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">{p.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </CardHeader>
          <CardContent className="mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">{p.price}</span>
              <Button asChild className="bg-primary text-primary-foreground">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Pesan
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
