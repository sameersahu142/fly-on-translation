import React, { useEffect, useRef } from "react";

const TranslationContent = ({ getSelectText }) => {
  const getContent = useRef();
  function getIframeSelectionText(iframe) {
    let win = iframe.current.contentWindow;
    let doc = win.document;

    if (win.getSelection) {
      return win.getSelection().toString();
    } else if (doc.selection && doc.selection.createRange) {
      return doc.selection.createRange().text;
    }
  }

  useEffect(() => {
    if (getContent) {
      getContent.current.contentWindow.addEventListener(
        "mouseup",
        function (event) {
          if (getIframeSelectionText(getContent).length > 0) {
            getSelectText(getIframeSelectionText(getContent));
          }
        }
      );
    }
  }, [getContent]);

  return (
    <>
      <iframe
        ref={getContent}
        title="Questionmark OnPremise"
        id="deliveryWrapperFrame"
        name="deliveryWrapperFrame"
        src="./ifream-content/test.html"
        frameBorder="0"
        scrolling="yes"
        height="800px"
        width="100%"
      ></iframe>
    </>
  );
};

export default TranslationContent;
