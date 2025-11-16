import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop"
          alt="Elegant café ambience"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-xs text-zinc-300">Gourmet • Coffee • Brunch</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Xander's Café</h1>
          <p className="mt-4 text-lg text-zinc-200">A modern gourmet café — dine in, delivery, takeaway & catering.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="inline-flex items-center rounded-md bg-zinc-50 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-white transition-colors">View Menu</Link>
            <Link to="/cart" className="inline-flex items-center rounded-md bg-zinc-900 text-white px-5 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors border border-white/20">Order Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
