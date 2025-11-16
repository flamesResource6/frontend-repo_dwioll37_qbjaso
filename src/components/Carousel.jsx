import { useEffect, useRef, useState } from 'react'

const items = [
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    title: 'Signature Breakfast',
    link: '/menu',
  },
  {
    src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop',
    title: 'Artisanal Coffee',
    link: '/menu',
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop',
    title: 'Gourmet Desserts',
    link: '/menu',
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const intervalMs = 4000

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  useEffect(() => {
    // Auto-slide
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, intervalMs)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // Pause on hover
  const onMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
  }
  const onMouseLeave = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % items.length)
      }, intervalMs)
    }
  }

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold text-zinc-900">Today's Specials</h3>
          <p className="text-sm uppercase tracking-wider text-zinc-500">Swipe or use arrows</p>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-lg" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <a href={items[index].link} className="group block">
            <img src={items[index].src} alt={items[index].title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
          </a>
          <button aria-label="Previous" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/60 text-white rounded-full h-10 w-10 grid place-items-center">‹</button>
          <button aria-label="Next" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/60 text-white rounded-full h-10 w-10 grid place-items-center">›</button>
        </div>
        <div className="mt-4 text-center text-zinc-800">
          <p className="text-xl font-medium mt-1">{items[index].title}</p>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-zinc-900' : 'bg-zinc-300'}`} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
