import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-zinc-600 mt-2">We'd love to hear from you.</p>

        <form className="mt-8 grid gap-4">
          <input type="text" placeholder="Name" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
          <input type="email" placeholder="Email" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
          <textarea rows="5" placeholder="Message" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"></textarea>
          <button type="button" className="inline-flex items-center rounded-md bg-zinc-900 text-white px-5 py-2.5 text-sm hover:bg-zinc-800">Send Message</button>
        </form>

        <div className="mt-10 text-sm text-zinc-600">
          <p>Branches: Clifton • Bukhari • Tipu Sultan</p>
          <p>Instagram: @xanderscafe</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
