import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import CTAStrip from '../components/CTAStrip';

interface HomePageProps {
  onNavigate: (page: 'articles') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CTAStrip onNavigate={onNavigate} />
    </div>
  );
}
