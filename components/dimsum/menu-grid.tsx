import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  {
    name: "Dimsum Sayur",
    price: "Rp12.000 / 4 pcs",
    img: "/dimsum.jpg",
  },
  {
    name: "Dimsum Udang",
    price: "Rp12.000 / 4 pcs",
    img: "/dimsum.jpg",
  },
  {
    name: "Dimsum Jamur",
    price: "Rp12.000 / 4 pcs",
    img: "/dimsum.jpg",
  },
  {
    name: "Dimsum Rumput Laut",
    price: "Rp12.000 / 4 pcs",
    img: "/dimsum.jpg",
  },
  {
    name: "Dumpling Sayur",
    price: "Rp12.000 / 4 pcs",
    img: "/dumpling.jpg",
  },
  {
    name: "Dumpling Udang",
    price: "Rp12.000 / 4 pcs",
    img: "/dumpling.jpg",
  },
  {
    name: "Dumpling Jamur",
    price: "Rp12.000 / 4 pcs",
    img: "/dumpling.jpg",
  },
  {
    name: "Dumpling Rumput Laut",
    price: "Rp12.000 / 4 pcs",
    img: "/dumpling.jpg",
  },
]

export function MenuGrid() {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((it) => (
        <Card key={it.name} className="overflow-hidden">
          {/* Bagian gambar */}
          <CardHeader className="p-0">
            <img
              src={it.img || "/placeholder.svg"}
              alt={it.name}
              className="w-full h-40 object-cover"
            />
          </CardHeader>

          {/* Bagian konten */}
          <CardContent className="p-4">
            <CardTitle className="text-base">{it.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{it.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
