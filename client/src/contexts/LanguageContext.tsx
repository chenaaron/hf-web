import React, { createContext, useContext, useState, ReactNode } from 'react';
import zhTranslations from '@/locales/zh.json';
import enTranslations from '@/locales/en.json';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: zhTranslations,
  en: enTranslations,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // 从 localStorage 读取保存的语言偏好
    const saved = localStorage.getItem('language') as Language | null;
    return saved || 'zh';
  });

  const t = (key: string, defaultValue?: any): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue !== undefined ? defaultValue : key;
      }
    }

    return value !== undefined ? value : (defaultValue !== undefined ? defaultValue : key);
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
