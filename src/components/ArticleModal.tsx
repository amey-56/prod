import { X } from 'lucide-react';
import { Article } from '../pages/ArticlesPage';
import { useEffect } from 'react';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-[#0D0D0F]/95 z-50 flex items-center justify-center p-8"
      onClick={onClose}
    >
      <div
        className="bg-[#1A1B1E] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1A1B1E] border-b border-[#0D0D0F] p-6 flex items-center justify-between">
          <h2
            className="text-2xl font-semibold text-[#EAEAEA]"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {article.title}
          </h2>
          <button
            onClick={onClose}
            className="text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#0D0D0F] text-[#0F4C5C] text-xs rounded-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-invert max-w-none">
            <p
              className="text-[#EAEAEA] text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
            >
              {article.summary}
            </p>
            <div className="bg-[#0D0D0F] rounded-lg p-8 border border-[#1A1B1E]">
              <p
                className="text-[#EAEAEA] opacity-80 text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Full article content or embedded PDF viewer would appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
