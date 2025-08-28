import { useState, useEffect } from 'react';
import { Language, translate } from '@/utils/translations';

export const useSimpleLanguage = () => {
  const [language, setLanguage] = useState<Language>('fr');

  // Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem('nexia-language') as Language;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('nexia-language', newLanguage);
  };

  const t = (key: string): string => {
    return translate(language, key);
  };

  return {
    language,
    setLanguage: changeLanguage,
    t
  };
};