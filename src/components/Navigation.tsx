interface NavigationProps {
  currentPage: 'home' | 'articles';
  onNavigate: (page: 'home' | 'articles') => void;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const handleNavigation = (page: 'home' | 'articles') => {
    onNavigate(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0D0D0F] border-b border-[#1A1B1E] z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavigation('home')}
          className="text-[#EAEAEA] font-semibold tracking-tight hover:text-[#0F4C5C] transition-colors"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          AN
        </button>
        <div className="flex gap-8">
          <button
            onClick={() => handleNavigation('home')}
            className={`text-sm tracking-wide transition-colors ${
              currentPage === 'home' ? 'text-[#0F4C5C]' : 'text-[#EAEAEA] hover:text-[#C7B5E6]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Home
          </button>
          {currentPage === 'home' && (
            <>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm tracking-wide text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-sm tracking-wide text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm tracking-wide text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Skills
              </button>
            </>
          )}
          <button
            onClick={() => handleNavigation('articles')}
            className={`text-sm tracking-wide transition-colors ${
              currentPage === 'articles' ? 'text-[#0F4C5C]' : 'text-[#EAEAEA] hover:text-[#C7B5E6]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Articles
          </button>
        </div>
      </div>
    </nav>
  );
}
