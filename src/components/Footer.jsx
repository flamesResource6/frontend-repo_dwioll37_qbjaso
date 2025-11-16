export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold">Xander's Café</h4>
          <p className="text-sm mt-2 text-zinc-400">A modern gourmet café offering dine-in, delivery, takeaway, and catering.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Visit Us</h4>
          <p className="text-sm mt-2 text-zinc-400">Clifton • Bukhari • Tipu Sultan</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Social</h4>
          <p className="text-sm mt-2 text-zinc-400">Facebook • Instagram — @xanderscafe</p>
        </div>
      </div>
      <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Xander's Café. All rights reserved.</div>
    </footer>
  )
}
