import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

import useTranslation from "./localization/customHooks/translations";
import FloatingContent from "./floating-content";
import { useHideShowContext } from "./context/hideShowContext";
import './floating-box.css';
import { useIsMount } from '../components/hooks/useMount';

const FloatingBox = ({ handelClose, handelRtlController, handelExpand }) => {
    const floatingBox = useRef(null);
    const isMount = useIsMount();
    const { isRtl } = useHideShowContext();
    const { isShow,isChatShow } = useHideShowContext();
    const translation = useTranslation();
    const floatingData=[{icon:faLanguage,text:translation.translateValue,isSelect:isShow?true:false},{icon:faCommentDots,text:translation.liveChatValue,isSelect:isChatShow?true:false}]

    const handelRtl = (value) => {
        handelRtlController(value)
        handelExpand(false);
        if (isShow) {
            handelClose(false, translation.translateValue)
          } else if (isChatShow) {
            handelClose(false, translation.liveChatValue)
          }
    }

   

    useEffect(() => {
        // if (!isMount) {
        //     if (isRtl && (isShow || isChatShow)) {
        //         floatingBox.current.classList.remove('textContainerIsShow');
        //         floatingBox.current.classList.remove('textContainer');
        //         floatingBox.current.classList.add('textContainerIsShowRtl');
        //     } else if (!isRtl && (isShow || isChatShow)) {
        //         floatingBox.current.classList.remove('textContainerIsShowRtl');
        //         floatingBox.current.classList.remove('textContainer');
        //         floatingBox.current.classList.add('textContainerIsShow');
        //     }
        // }
    }, [isRtl, isShow,isChatShow])

    return (
        <>
            <div className={isRtl ? "floatingBoxContainerRtl" : "floatingBoxContainer"} >
                <div className="content">
                    <div style={{ width: '100%', height: '100%' }}>
                        <div className={isRtl ? "hrLineRtl" : "hrLine"} >
                            <div style={{ cursor: 'pointer' }} onClick={() => handelRtl(!isRtl)} >
                                <FontAwesomeIcon icon={isRtl ? faAngleDoubleRight : faAngleDoubleLeft} color='#808080' title={isRtl ? translation.moveToRightValue : translation.moveToLeftValue} />
                            </div>
                            <div style={{ cursor: "move" }} id="floatingController">
                                <FontAwesomeIcon icon={faArrowsAlt} color='#808080' title={translation.dragUpOrDownValue} />
                            </div>
                        </div>
                        <div ref={floatingBox} title="Show Translation">
                            <div style={{ width: '100%' }}>
                                {
                                    floatingData.map((item, index) => (
                                        <FloatingContent item={item} key={index} handelClose={handelClose} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FloatingBox;