export default function About() {
  return (
    <section id="about" className="bg-[#0D0D0F] py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h3
          className="text-xs uppercase tracking-widest text-[#0F4C5C] mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          About Me
        </h3>
        <div className="bg-[#1A1B1E] rounded-lg p-12 shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
          <p
            className="text-[#EAEAEA] text-lg leading-relaxed mb-6"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
          >
            Currently pursuing an MBA in Business Management with a major in Marketing and a minor
            in Finance at XIMB (Batch 2024–26). Prior to business school, I earned a B.Tech in
            Computer Science from VIT-AP, which gave me the technical foundation to bridge strategy
            with execution.
          </p>
          <p
            className="text-[#EAEAEA] text-lg leading-relaxed mb-6"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
          >
            My experience spans financial analysis, strategy consulting, and AI-driven problem
            solving. I've worked on market entry strategies, competitive benchmarking, product
            roadmaps, and user flow optimization. I think in frameworks, love deconstructing complex
            problems, and approach every challenge with equal parts rigor and skepticism.
          </p>
          <p
            className="text-[#EAEAEA] text-lg leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
          >
            I'm particularly drawn to early-stage product strategy, growth loops, and the messy
            intersection of business models and user behavior. When I'm not building decks or
            analyzing data, I'm writing teardowns and frameworks that actually make sense.
          </p>
        </div>
      </div>
    </section>
  );
}
