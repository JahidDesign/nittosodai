import React, { createContext, useState } from "react";

const LanguageContext = createContext({
  language: "bn",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn"); // default Bangla, you can load from localStorage

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
