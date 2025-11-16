import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Xander's Café</h1>
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
