import { useEffect, useRef, useState } from 'react'

const specials = [
  {
    src: 'https://images.unsplash.com/photo-1715663760578-f3081f3c7105?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcnVmZmxlJTIwU2NyYW1ibGV8ZW58MHwwfHx8MTc2MzI2ODE0NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: "Truffle Scramble",
    link: '/menu',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
    title: 'Steak & Eggs',
    link: '/menu',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop',
    title: 'Berry Pancakes',
    link: '/menu',
  },
]

export default function Specials() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const intervalMs = 3500

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % specials.length)
    }, intervalMs)
    return () => timerRef.current && clearInterval(timerRef.current)
  }, [])

  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Chef's Specials</h3>
          <p className="mt-2 text-zinc-600">A spinning showcase of our featured dishes — tap any to explore.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {specials.map((item, i) => {
            const isActive = i === active
            // Different spin timing and direction per item for a lively feel
            const spin = [
              'animate-[spin_14s_linear_infinite]',
              'animate-[spin_18s_linear_infinite] [animation-direction:reverse]',
              'animate-[spin_16s_linear_infinite]'
            ][i % 3]

            return (
              <a
                key={i}
                href={item.link}
                className="group block"
                aria-label={`${item.title} — view details`}
              >
                <div className="relative mx-auto aspect-square w-64 sm:w-72 md:w-64 lg:w-72 rounded-full overflow-hidden ring-1 ring-black/5 shadow-xl bg-white">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={[
                      'absolute inset-0 h-full w-full object-cover rounded-full',
                      spin,
                      'transition-transform duration-500',
                      'hover:[animation-play-state:paused]',
                      isActive ? 'scale-105' : 'scale-100 opacity-90'
                    ].join(' ')}
                  />

                  {/* subtle vignette for depth */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Focus ring on the active one */}
                  <div
                    className={[
                      'pointer-events-none absolute inset-0 rounded-full',
                      isActive ? 'ring-2 ring-zinc-900/40' : 'ring-0'
                    ].join(' ')}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-medium text-zinc-900">{item.title}</h4>
                  <p className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">View details →</p>
                </div>
              </a>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">Hover to pause the spin. Images are illustrative.</p>
      </div>
    </section>
  )
}
