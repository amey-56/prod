import { Article } from '../pages/ArticlesPage';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1A1B1E] rounded-lg overflow-hidden text-left hover:translate-y-[-4px] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)] group"
    >
      <div className="aspect-video bg-[#0D0D0F] relative overflow-hidden">
        {article.thumbnailType === 'teal' ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 300"
              className="opacity-40 group-hover:opacity-60 transition-opacity"
            >
              <line
                x1="50"
                y1="150"
                x2="150"
                y2="100"
                stroke="#0F4C5C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="150"
                y1="100"
                x2="250"
                y2="180"
                stroke="#0F4C5C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="250"
                y1="180"
                x2="350"
                y2="120"
                stroke="#0F4C5C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="50" cy="150" r="6" fill="#0F4C5C" />
              <circle cx="150" cy="100" r="6" fill="#0F4C5C" />
              <circle cx="250" cy="180" r="6" fill="#0F4C5C" />
              <circle cx="350" cy="120" r="6" fill="#0F4C5C" />
            </svg>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 300"
              className="opacity-40 group-hover:opacity-60 transition-opacity"
            >
              <rect x="80" y="80" width="80" height="80" stroke="#C7B5E6" strokeWidth="2" fill="none" />
              <rect x="180" y="120" width="60" height="100" stroke="#C7B5E6" strokeWidth="2" fill="none" />
              <rect x="260" y="100" width="70" height="120" stroke="#C7B5E6" strokeWidth="2" fill="none" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-semibold text-[#EAEAEA] mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {article.title}
        </h3>
        <p
          className="text-[#EAEAEA] opacity-80 text-sm mb-4 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
        >
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#0D0D0F] text-[#EAEAEA] text-xs rounded-full"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
