const experiences = [
  {
    company: 'Avalon Consulting',
    role: 'Strategy Intern',
    period: 'Summer 2025',
    tags: ['Benchmarking', 'Market Sizing', 'Competitive Analysis', 'Strategy Frameworks'],
    description:
      'Worked on market entry strategy projects, competitive benchmarking, and quantitative analysis for clients across sectors.',
  },
  {
    company: 'Phoenix Global',
    role: 'Financial Analyst',
    period: '2023',
    tags: ['Financial Modeling', 'Data Storytelling', 'Business Intelligence', 'Analytics'],
    description:
      'Built financial models, performed market research, and translated complex datasets into actionable business insights.',
  },
  {
    company: 'On-Campus Leadership',
    role: 'Product & Strategy Projects',
    period: '2024–Present',
    tags: ['Product Thinking', 'User Flows', 'Go-to-Market', 'PM Frameworks'],
    description:
      'Led product case competitions, created wireframes and user journey maps, and developed GTM strategies for hypothetical launches.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0D0D0F] py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h3
          className="text-xs uppercase tracking-widest text-[#0F4C5C] mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Experience
        </h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-[#1A1B1E] last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#0F4C5C] rounded-full"></div>
              <div className="bg-[#1A1B1E] rounded-lg p-8 shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_20px_rgba(15,76,92,0.15)] transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4
                      className="text-xl font-semibold text-[#EAEAEA] mb-1"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {exp.company}
                    </h4>
                    <p
                      className="text-[#EAEAEA] opacity-80"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {exp.role}
                    </p>
                  </div>
                  <span
                    className="text-sm text-[#0F4C5C] whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className="text-[#EAEAEA] opacity-90 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#0D0D0F] text-[#EAEAEA] text-xs rounded-full border border-[#1A1B1E]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
