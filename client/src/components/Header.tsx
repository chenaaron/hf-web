import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // 使用 passive 事件监听器提升滚动性能
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.products'), href: '#services' },
    { label: t('nav.news'), href: '#news' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-border shadow-lg'
          : 'bg-white/80 backdrop-blur-md border-b border-border/50'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img 
              src="/images/logo.png" 
              alt="海飞智能" 
              className="w-10 h-10 rounded-lg group-hover:shadow-lg transition-all duration-300" 
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">海飞智能</span>
              <span className="text-xs text-muted-foreground">科技汇海,飞出精彩</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-border pl-4">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded transition-colors duration-200 font-medium text-sm ${
                  language === 'zh'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-colors duration-200 font-medium text-sm ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                English
              </button>
            </div>
            {/* CTA Button */}
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm hover:-translate-y-0.5">
              {t('nav.getScheme')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">Language:</span>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 rounded transition-colors duration-200 font-medium text-sm ${
                    language === 'zh'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded transition-colors duration-200 font-medium text-sm ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium">
              {t('nav.getScheme')}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
