import React, { useState, useContext, useEffect, createContext } from "react";

export const LanguageContext = createContext({language:''});

export default function LanguageContextProvider({ children }) {
  
  const [language, changeLanguage] = useState("en-US");
  let userLang = navigator.language;
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const paramLang=params.get('lang');


  useEffect(()=>{
    if(paramLang || userLang){
      if(userLang){
        changeLanguage(userLang);
      }else if(paramLang){
        changeLanguage(paramLang);
      }
    }
  },[paramLang,userLang])

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
}


export const useLanguageContext = () => useContext(LanguageContext);