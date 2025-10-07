import { Badge } from "@/components/ui/badge"

const features = [
  { title: "Halal", desc: "Bahan dan proses terjamin halal." },
  { title: "Fresh Harian", desc: "Dibuat setiap hari, selalu segar." },
  { title: "Harga Mahasiswa", desc: "Harga sesuai dengan kantong." },
  { title: "Banyak Varian", desc: "Tersedia varian sayur, udang, jamur, rumput laut." },
  { title: "Tersedia di Kampus", desc: "Mudah di jangkau." },
]

export function Features() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {features.map((f) => (
        <div key={f.title} className="rounded-lg border p-4">
          <Badge className="mb-2 bg-primary text-primary-foreground">{f.title}</Badge>
          <p className="text-sm text-muted-foreground">{f.desc}</p>
        </div>
      ))}
    </div>
  )
}
