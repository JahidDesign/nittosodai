import { createContext } from 'react';

const LanguageContext = createContext({
  language: 'bn',
  setLanguage: () => {},
});

export default LanguageContext;
