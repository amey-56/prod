import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'articles'>('home');

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#EAEAEA]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? <HomePage onNavigate={setCurrentPage} /> : <ArticlesPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
