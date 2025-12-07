import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['overview', 'research-questions', 'data', 'methodology', 'eda', 'discussion', 'conclusion', 'about-us'];
      const scrollPosition = window.scrollY + 100;
      
      // If we're at the very top (hero section), don't highlight any section
      if (window.scrollY < 100) {
        setActiveSection('');
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'research-questions', label: 'Research Questions' },
    { id: 'data', label: 'Data' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'eda', label: 'EDA' },
    { id: 'discussion', label: 'Discussion' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'about-us', label: 'About Us' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50 shadow-xl shadow-blue-500/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm uppercase tracking-wider ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-red-500/20 to-blue-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden absolute right-6 p-2 text-slate-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-xl bg-slate-950/95 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm uppercase tracking-wider ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-red-500/20 to-blue-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-0" />
    </>
  );
}