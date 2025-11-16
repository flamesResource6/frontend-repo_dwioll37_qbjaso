import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Catering() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold">Catering</h1>
        <p className="text-zinc-600 mt-2 max-w-2xl">Bring the Xander's experience to your events with bespoke menus, live stations, and full-service catering. Ideal for corporate luncheons, private dinners, and celebrations.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Corporate Events', desc: 'Premium lunch buffets, coffee bars, canapés' },
            { title: 'Private Parties', desc: 'Custom menus for birthdays, anniversaries' },
            { title: 'Weddings', desc: 'Elegant dining experiences for your big day' },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-medium">{c.title}</h3>
              <p className="text-sm text-zinc-600 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-zinc-50 border border-zinc-200 p-6">
          <h3 className="font-medium">Request a Quote</h3>
          <form className="grid sm:grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Name" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
            <input type="email" placeholder="Email" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
            <input type="text" placeholder="Event Type" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
            <input type="text" placeholder="Guests" className="rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
            <textarea placeholder="Message" rows="4" className="sm:col-span-2 rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"></textarea>
            <button type="button" className="sm:col-span-2 inline-flex items-center rounded-md bg-zinc-900 text-white px-5 py-2.5 text-sm hover:bg-zinc-800">Send Request</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
