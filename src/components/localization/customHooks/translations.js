import LocalizedStrings from "react-localization";

import localization from "../languages";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function useTranslation() {
  const { language } = useLanguageContext();
  let translation = new LocalizedStrings(localization);
  translation.setLanguage(language);
  return translation;
}