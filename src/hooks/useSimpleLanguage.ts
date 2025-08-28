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
    console.log('Changing language to:', newLanguage); // Debug log
    setLanguage(newLanguage);
    localStorage.setItem('nexia-language', newLanguage);
    
    // Force a page refresh to ensure all components update
    window.location.reload();
  };

  const t = (key: string): string => {
    const result = translate(language, key);
    console.log(`Translation for "${key}" in ${language}:`, result); // Debug log
    return result;
  };

  return {
    language,
    setLanguage: changeLanguage,
    t
  };
};