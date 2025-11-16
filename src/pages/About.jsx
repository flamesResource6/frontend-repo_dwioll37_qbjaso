import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="text-zinc-600 mt-4 leading-relaxed">
          At Xander's, we bring together fine dining sensibilities and a relaxed café vibe. From our carefully sourced ingredients to our artisanal coffee, every detail is crafted for delight. Experience the harmony of flavors in a space designed for conversations and celebrations.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <img className="rounded-xl w-full h-72 object-cover" src="https://images.unsplash.com/photo-1759301495161-31027c795358?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEaW5pbmclMjBhbWJpYW5jZXxlbnwwfDB8fHwxNzYzMjY3NTc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dining ambiance" />
          <img className="rounded-xl w-full h-72 object-cover" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop" alt="Coffee bar" />
        </div>
      </section>
      <Footer />
    </div>
  )
}
