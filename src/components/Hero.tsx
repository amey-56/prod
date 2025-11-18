export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#0D0D0F] px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            className="text-6xl font-semibold text-[#EAEAEA] mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Amey Negandhi.
          </h1>
          <h2
            className="text-2xl text-[#EAEAEA] mb-6 font-normal"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Business Strategy, Product Thinking, and Tech Fluency.
          </h2>
          <p
            className="text-lg text-[#EAEAEA] opacity-80"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Making sense of business chaos so you don't have to.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square bg-[#1A1B1E] rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.3)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C5C]/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[#0F4C5C]/30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
