import definitionPTBR from '../translations/pt-BR.json';
import definitionEN from '../translations/en.json';

export const getLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('i18n');
  }
  return 'en';
}

export const getVideoPath = (videoPath) => {
  const language = getLanguage();

  return language === 'en' ? `${videoPath}-en` : videoPath;
}

export const checkTranslation = (id) => {
  const language = getLanguage();
  const translations = language === 'pt-BR' ? definitionPTBR : definitionEN;

  return !!translations[id];
};

export const renderWhenEnglish = () => {
  const language = getLanguage();

  return language === 'en';
};
