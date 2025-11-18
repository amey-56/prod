import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0F] border-t border-[#1A1B1E] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <a
            href="mailto:ameyng105@gmail.com"
            className="text-[#EAEAEA] text-sm hover:text-[#0F4C5C] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ameyng105@gmail.com
          </a>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:ameyng105@gmail.com"
              className="text-[#EAEAEA] hover:text-[#C7B5E6] transition-colors"
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
