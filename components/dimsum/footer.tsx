export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} DIMDUM. All rights reserved.</p>
        <p className="text-xs">Halal • Fresh • Tanpa Pengawet</p>
      </div>
    </footer>
  )
}
