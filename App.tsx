import React, { useState, useEffect } from 'react';
import { ArticleContent } from './components/ArticleContent';
import { ReflectionContent } from './components/ReflectionContent';
import { ReferencesContent } from './components/ReferencesContent';
import { Section } from './types';
import { BookOpen, User, Quote, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ESSAY);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when switching sections
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const navItems = [
    { id: Section.ESSAY, label: 'Final Report', icon: <BookOpen className="w-4 h-4" /> },
    { id: Section.REFLECTION, label: 'My Reflection', icon: <User className="w-4 h-4" /> },
    { id: Section.CITATIONS, label: 'Works Cited', icon: <Quote className="w-4 h-4" /> },
  ];

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rutgers-red rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl">
              R
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900 hidden sm:block">
              College Writing | Fall 2025
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-stone-100 text-rutgers-red font-semibold'
                    : 'text-stone-600 hover:text-slate-900 hover:bg-stone-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-100 bg-white px-4 py-2 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-sm font-medium mb-1 ${
                  activeSection === item.id
                    ? 'bg-stone-100 text-rutgers-red'
                    : 'text-stone-600'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white p-6 md:p-12 lg:p-16 rounded-xl shadow-sm border border-stone-100">
            {activeSection === Section.ESSAY && <ArticleContent />}
            {activeSection === Section.REFLECTION && <ReflectionContent />}
            {activeSection === Section.CITATIONS && <ReferencesContent />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center text-stone-500 text-sm">
          <p className="font-serif italic mb-2">"The Algorithm Effect"</p>
          <p>© 2025 Kinshuk Goel | Rutgers University.</p>
          <a
            href="https://github.com/shuknuk/the-algorithm-effect"
            className="inline-flex items-center justify-center gap-2 mt-3 text-rutgers-red font-medium hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Website source code
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
