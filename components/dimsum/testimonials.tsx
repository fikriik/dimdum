import { Card, CardContent } from "@/components/ui/card"

const testimonies = [
  {
    name: "Excel",
    text: "Lezat, Cepat dan terjangkau!",
  },
  {
    name: "Venita",
    text: "Kualitas dan kuantitas baik!.",
  },
  {
    name: "Sari",
    text: "Pelayanan baik, makanan sehat dan terjangkau.",
  },
]

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonies.map((t) => (
        <Card key={t.name}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <img src="/avatar-pelanggan.jpg" alt="" aria-hidden="true" className="size-10 rounded-full border" />
              <div className="font-medium">{t.name}</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">“{t.text}”</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
