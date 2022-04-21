import './App.css';
import TranslationTool from './translation-tool/translation-tool';
import HideShowContextProvider, { useHideShowContext } from './components/context/hideShowContext';
import { useState } from 'react';
import TranslationContent from './components/translation-content';
import LanguageAndSelectTextContextProvider from './components/context/languageAndSelectTextContext';
// import LanguageContextProvider from './components/localization/contexts/LanguageContext';
// import useTranslation from './components/localization/customHooks/translations';

function App() {
  const { isShow, isRtl, isExpand } = useHideShowContext();
  const [isShowContainer, setIsShowContainer] = useState(isShow);
  const [isRightToLeft, setIsRightToLeft] = useState(isRtl);
  const [isExpandContainer, setIsExpandContainer] = useState(isExpand);
  const [selectTextValue, setSelectTextValue]=useState("")
  const [isChatHideShow, setIsChatHideShow] = useState(false);
  // const translation=useTranslation();

  const handelClose = (value,type) => {
    if(type==="Translation"){
      setIsChatHideShow(false)
      setIsShowContainer(value);
    }else if(type==="Live Chat"){
      setIsShowContainer(false);
      setIsChatHideShow(value)
    }
  }

  const handelRtlController = (value) => {
    setIsRightToLeft(value)
  }

  const handelExpand = (value) => {
    setIsExpandContainer(value)
  }

  const getSelectText=(value)=>{
    setSelectTextValue(value)
  }

  return (
    // <LanguageContextProvider >
    <LanguageAndSelectTextContextProvider selectTextValue={selectTextValue}>
    <div>
      <HideShowContextProvider isHideShow={isShowContainer} isRightToLeft={isRightToLeft} isExpandClose={isExpandContainer} isChatHideShow={isChatHideShow} >
        <TranslationTool handelClose={handelClose} handelRtlController={handelRtlController} handelExpand={handelExpand}></TranslationTool>
      </HideShowContextProvider>
    </div>
    <TranslationContent getSelectText={getSelectText}/>
    </LanguageAndSelectTextContextProvider>
    // </LanguageContextProvider>
  );
}

export default App;
