import { useEffect, useRef, useState } from 'react'

const specials = [
  {
    src: 'https://images.unsplash.com/photo-1715663760578-f3081f3c7105?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcnVmZmxlJTIwU2NyYW1ibGV8ZW58MHwwfHx8MTc2MzI2ODE0NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Truffle Scramble',
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
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-zinc-900">Chef's Specials</h3>
          <p className="mt-2 text-zinc-600">Limited-time dishes crafted with seasonal ingredients.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`group relative overflow-hidden rounded-xl shadow-md bg-white block aspect-[4/3]`}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === active ? '' : 'opacity-80'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <h4 className="text-white text-lg font-medium">{item.title}</h4>
                <span className="text-white/80 text-sm">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
