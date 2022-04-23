import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHideShowContext } from "./context/hideShowContext";
import useTranslation from "./localization/customHooks/translations";

const FloatingContent = ({ handelClose,item }) => {
    const { isShow, isChatShow } = useHideShowContext();
    const translation = useTranslation();
    const handelOpen = (value) => {
        if(value.text === translation.liveChatValue){
            handelClose(!isChatShow,value.text); 
        }else if(value.text === translation.translateValue){
            handelClose(!isShow,value.text);
        }
       
    }
    return (
        <div style={{ width: '100%',marginTop:'1px' }}  onClick={()=>handelOpen(item)} >
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