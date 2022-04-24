import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

import './floating-content.css';
import { useHideShowContext } from "./context/hideShowContext";
import useTranslation from "./localization/customHooks/translations";
import { useIsMount } from "./hooks/useMount";

const FloatingContent = ({ handelClose,item }) => {
    const floatingContentBox = useRef(null);
    const isMount = useIsMount();
    const { isRtl, isShow, isChatShow } = useHideShowContext();
    const translation = useTranslation();

    const handelOpen = (value) => {
        if(value.text === translation.liveChatValue){
            handelClose(!isChatShow,value.text); 
        }else if(value.text === translation.translateValue){
            handelClose(!isShow,value.text);
        }
    }

    useEffect(() => {
        floatingContentBox.current.classList.remove("textContainerIsShowRtl");
        floatingContentBox.current.classList.remove("textContainerIsShow");
        floatingContentBox.current.classList.add("textContainer");
        if (!isMount) {
            if (isRtl && item.isSelect) {
                floatingContentBox.current.classList.remove("textContainer");
                floatingContentBox.current.classList.add("textContainerIsShowRtl");
            } else if (!isRtl && item.isSelect) {
                floatingContentBox.current.classList.remove("textContainer");
                floatingContentBox.current.classList.add("textContainerIsShow");
            }
        }
    }, [isRtl, item.isSelect])
    return (
        <div style={{marginTop:'1px' }}  onClick={()=>handelOpen(item)} className="textContainer" ref={floatingContentBox} title={item.text === translation.translateValue ? translation.showTranslationValue : translation.showLiveChatValue}>
            <div className="languageIcon">
                <FontAwesomeIcon icon={item.icon} size="lg" />
            </div>
            <div className="translation">
                {item.text}
            </div>
        </div>
    )
}
export default FloatingContent; 