import React, { useEffect, useRef } from "react";

const TranslationContent = () => {
  const getContent = useRef();

  useEffect(() => {
    if (getContent) {
      console.log(getContent);
      getContent.current.contentWindow.getSelection();
    }
  }, [getContent]);

  return (
    <iframe
      ref={getContent}
      title="Questionmark OnPremise"
      id="deliveryWrapperFrame"
      name="deliveryWrapperFrame"
      src="http://localhost:4200/assets/test.html"
      frameBorder="0"
      scrolling="yes"
      height="800px"
      width="100%"
    ></iframe>
  );
};
export default TranslationContent;
