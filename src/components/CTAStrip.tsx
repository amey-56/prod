interface CTAStripProps {
  onNavigate: (page: 'articles') => void;
}

export default function CTAStrip({ onNavigate }: CTAStripProps) {
  return (
    <section className="bg-[#0D0D0F] py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1A1B1E] rounded-lg p-12 text-center shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
          <p
            className="text-xl text-[#EAEAEA] mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore my articles, breakdowns, and product case slides.
          </p>
          <button
            onClick={() => onNavigate('articles')}
            className="px-8 py-3 bg-[#0F4C5C] text-[#0D0D0F] font-semibold rounded-lg hover:bg-[#C7B5E6] transition-all transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View Articles & Slides
          </button>
        </div>
      </div>
    </section>
  );
}
