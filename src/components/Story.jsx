export default function Story() {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-900">Our Delicious Story</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            A place run by foodies and food lovers, bringing you the ultimate world of flavors. We are a fine dining restaurant with a great ambiance and exceptional service. You can dine in, order online, or enjoy our takeaway options.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl bg-white">
          <img
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop"
            alt="Xander's gourmet spread"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
