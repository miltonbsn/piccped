import definitionPTBR from '../translations/pt-BR.json';
import definitionEN from '../translations/en.json';

export const getVideoPath = (videoPath) => {
  const language = localStorage.getItem('i18n');

  return language === 'en' ? `${videoPath}-en` : videoPath;
}

export const checkTranslation = (id) => {
  const language = localStorage.getItem('i18n');
  const translations = language === 'pt-BR' ? definitionPTBR : definitionEN;

  console.log(!!translations[id], id);
  return !!translations[id];
};

export const renderWhenEnglish = () => {
  const language = localStorage.getItem('i18n');

  return language === 'en';
};
