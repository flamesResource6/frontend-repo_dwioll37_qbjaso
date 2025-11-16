import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Cart() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold">My Cart</h1>
        <p className="text-zinc-600 mt-2">Your selected items will appear here. (Demo only)</p>
        <div className="mt-6 rounded-xl border border-zinc-200 p-6">
          <p className="text-sm text-zinc-600">Your cart is empty. Explore our menu to add items.</p>
          <a href="/menu" className="inline-flex mt-4 items-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800">Browse Menu</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
