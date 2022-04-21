import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// import useTranslation from "./localization/customHooks/translations";
import { useHideShowContext } from './context/hideShowContext';
import { useIsMount } from './hooks/useMount';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}
const ExpandAndCrossIcon = ({ handelExpandBtn, handelCloseBtn }) => {
//   const translation = useTranslation();
  const { isShow, isExpand, isChatShow } = useHideShowContext();
  const { isMount } = useIsMount();
  const [windowDimensions, setWindowDimensions] = useState();

  const handelCoseSheet = () => {
    if (isShow) {
      handelCloseBtn(false, "Translation")
    } else if (isChatShow) {
      handelCloseBtn(false, "Live Chat")
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMount) {
      if (windowDimensions) {
        if (isShow) {
          handelCloseBtn(false, "Translation")
        } else if (isChatShow) {
          handelCloseBtn(false, "Live Chat")
        }
      }
    }
  }, [windowDimensions]);



  return (
    <div style={{ display: 'flex' }}>
      <div style={{ cursor: 'pointer', marginRight: '7px' }} onClick={() => handelExpandBtn(!isExpand)}>
        <FontAwesomeIcon icon={isExpand ? faCompressAlt : faExpandAlt} title={isExpand ? "Collapse Translation" : "Expand Translation"} />
      </div>
      <div style={{ cursor: 'pointer', marginLeft: '5px' }} onClick={handelCoseSheet}>
        <FontAwesomeIcon icon={faTimes} size="xl" title="Hide Translation" />
      </div>
    </div>
  )
}
export default ExpandAndCrossIcon;