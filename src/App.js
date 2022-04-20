import './App.css';
import TranslationTool from './translation-tool/translation-tool';
import HideShowContextProvider, { useHideShowContext } from './components/context/hideShowContext';
import { useState } from 'react';
import TranslationContent from './components/translation-content';

function App() {
  const { isShow, isRtl } = useHideShowContext();
  const [isShowContainer, setIsShowContainer] = useState(isShow);
  const [isRightToLeft, setIsRightToLeft] = useState(isRtl);
  const handelClose = (value) => {
    setIsShowContainer(value)
  }

  const handelRtlController = (value) => {
    setIsRightToLeft(value)
  }

  return (
    <div>
      <HideShowContextProvider isHideShow={isShowContainer} isRightToLeft={isRightToLeft} >
        <TranslationTool handelClose={handelClose} handelRtlController={handelRtlController}></TranslationTool>
      </HideShowContextProvider>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  );
}

export default App;
