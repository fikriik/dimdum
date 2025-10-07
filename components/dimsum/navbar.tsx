"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const WA_LINK = "https://wa.me/6285723991081?text=Halo%20DimDum%20%2C%20saya%20ingin%20pesan%20dimsum." // ganti nomor WA di sini

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Beranda DIMDUM">
          <img src="/logo-dimsum.jpg" alt="" aria-hidden="true" className="size-7 rounded-md" />
          <span className="font-semibold tracking-tight">DIMDUM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi utama">
          <a href="#menu" className="text-sm hover:underline underline-offset-4">
            Menu
          </a>
          <a href="#keunggulan" className="text-sm hover:underline underline-offset-4">
            Keunggulan
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="bg-primary text-primary-foreground">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Pesan via WhatsApp">
              Pesan WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
