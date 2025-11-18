const businessSkills = [
  'Strategy',
  'Product Sense',
  'Problem Solving',
  'Market Research',
  'Go-to-Market',
  'Competitive Analysis',
];

const technicalSkills = [
  'Excel',
  'Power BI',
  'PowerPoint',
  'Gen AI Tools',
  'Analytics',
  'SQL Basics',
  'Wireframing',
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0D0D0F] py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h3
          className="text-xs uppercase tracking-widest text-[#0F4C5C] mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4
              className="text-lg font-semibold text-[#EAEAEA] mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Business Skills
            </h4>
            <div className="flex flex-wrap gap-3">
              {businessSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1A1B1E] text-[#EAEAEA] text-sm rounded-full hover:bg-[#C7B5E6] hover:text-[#0D0D0F] transition-all cursor-default"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4
              className="text-lg font-semibold text-[#EAEAEA] mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Technical & Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1A1B1E] text-[#EAEAEA] text-sm rounded-full hover:bg-[#C7B5E6] hover:text-[#0D0D0F] transition-all cursor-default"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
