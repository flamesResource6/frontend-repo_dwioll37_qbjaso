import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const items = [
  { name: "Classic Eggs Benedict", desc: "Poached eggs, hollandaise, house sourdough", price: 1450 },
  { name: "Smoked Salmon Bagel", desc: "Cream cheese, capers, dill", price: 1650 },
  { name: "Truffle Fries", desc: "Parmesan, parsley, truffle oil", price: 950 },
  { name: "Steak Sandwich", desc: "Caramelized onions, aioli, rocket", price: 1850 },
  { name: "Chocolate Lava Cake", desc: "Vanilla gelato", price: 1100 },
]

export default function Menu() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <p className="text-zinc-600 mt-2">Taste the best of Xander's.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="rounded-xl border border-zinc-200 p-5 hover:shadow-md transition">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">{it.name}</h3>
                <span className="text-zinc-700">Rs {it.price}</span>
              </div>
              <p className="text-sm text-zinc-600 mt-2">{it.desc}</p>
              <button className="mt-4 inline-flex items-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
