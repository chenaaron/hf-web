import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcherSimple() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-2 py-1 transition-colors duration-200 ${
          language === 'zh'
            ? 'text-primary font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        中文
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 transition-colors duration-200 ${
          language === 'en'
            ? 'text-primary font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        English
      </button>
    </div>
  );
}
