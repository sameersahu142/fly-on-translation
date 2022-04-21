import React, { createContext, useContext, useEffect, useState } from "react";

export const LanguageAndSelectTextContext = createContext({ language: "", selectText: ""});

export default function LanguageAndSelectTextContextProvider({ children, selectTextValue }) {
    const [language, setLanguage] = useState('');
    const [selectText, setSelectText] = useState("");
    const userLang = navigator.language;
  

    useEffect(() => {
        if (selectTextValue.length > 0) {
            setSelectText(selectTextValue)
        }
    }, [selectTextValue])


    return (
        <LanguageAndSelectTextContext.Provider value={{ language, selectText }} >
            {children}
        </LanguageAndSelectTextContext.Provider>
    )
};

export const useLanguageAndSelectTextContext = () => useContext(LanguageAndSelectTextContext)