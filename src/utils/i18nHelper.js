export const getVideoPath = (videoPath) => {
  const language = localStorage.getItem('i18n');

  return language === 'en' ? `${videoPath}-en` : videoPath;
}