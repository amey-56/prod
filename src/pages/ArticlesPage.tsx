import { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import ArticleModal from '../components/ArticleModal';

export type FilterType = 'All' | 'Product' | 'Strategy' | 'Slides' | 'Case Studies';

export interface Article {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  category: FilterType;
  thumbnailType: 'teal' | 'lilac';
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Deconstructing Retention Loops in B2C Products',
    summary:
      'A deep dive into how consumer apps use habit formation, push mechanics, and content velocity to keep users coming back.',
    tags: ['Product Sense', 'Growth Loops', 'User Journey'],
    category: 'Product',
    thumbnailType: 'teal',
  },
  {
    id: '2',
    title: 'Market Sizing Frameworks That Actually Work',
    summary:
      'Beyond the TAM/SAM/SOM template: practical approaches to sizing markets in ambiguous, early-stage contexts.',
    tags: ['Strategy', 'Market Research', 'Frameworks'],
    category: 'Strategy',
    thumbnailType: 'lilac',
  },
  {
    id: '3',
    title: 'Product Teardown: How Notion Won Productivity',
    summary:
      'Analyzing Notion GTM strategy, UX decisions, and network effects that turned a doc editor into a platform.',
    tags: ['Product Sense', 'Case Studies', 'PM Frameworks'],
    category: 'Case Studies',
    thumbnailType: 'teal',
  },
  {
    id: '4',
    title: 'The Competitive Analysis Deck Template',
    summary:
      'A slide deck framework for benchmarking competitors without drowning in feature comparison tables.',
    tags: ['Strategy', 'Slides', 'Competitive Analysis'],
    category: 'Slides',
    thumbnailType: 'lilac',
  },
  {
    id: '5',
    title: 'User Onboarding Patterns That Convert',
    summary:
      'Breaking down signup flows, activation moments, and progressive disclosure tactics from top SaaS products.',
    tags: ['Product Sense', 'User Journey', 'Research'],
    category: 'Product',
    thumbnailType: 'teal',
  },
  {
    id: '6',
    title: 'Pricing Strategy for Early-Stage Products',
    summary:
      'How to price when you have no data: anchoring, value metrics, and willingness-to-pay frameworks that work.',
    tags: ['Strategy', 'PM Frameworks', 'Growth Loops'],
    category: 'Strategy',
    thumbnailType: 'lilac',
  },
];

export default function ArticlesPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filters: FilterType[] = ['All', 'Product', 'Strategy', 'Slides', 'Case Studies'];

  const filteredArticles =
    selectedFilter === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedFilter);

  return (
    <div className="pt-32 pb-20 px-8 min-h-screen bg-[#0D0D0F]">
      <div className="max-w-6xl mx-auto" style={{ paddingLeft: '72px' }}>
        <h1
          className="text-5xl font-semibold text-[#EAEAEA] mb-4"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Articles and Product Case Slides
        </h1>
        <p
          className="text-lg text-[#EAEAEA] opacity-80 mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Breakdowns, rewrites, teardown decks, and frameworks I actually use.
        </p>

        <div className="flex gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                selectedFilter === filter
                  ? 'bg-[#0F4C5C] text-[#EAEAEA]'
                  : 'bg-[#1A1B1E] text-[#EAEAEA] hover:bg-[#C7B5E6] hover:text-[#0D0D0F]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => setSelectedArticle(article)}
            />
          ))}
        </div>

        <div className="text-center">
          <span
            className="inline-block px-4 py-2 bg-[#1A1B1E] text-[#0F4C5C] text-xs rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Updated Monthly
          </span>
        </div>
      </div>

      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </div>
  );
}
