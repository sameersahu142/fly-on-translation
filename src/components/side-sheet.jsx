import React, { useEffect, useRef } from "react";

import { useHideShowContext } from "./context/hideShowContext";
import './side-sheet.css';
import { useIsMount } from '../components/hooks/useMount';
import SideSheetContent from "./side-sheet-content";
// import ChatContent from "./chat-components/chat-content";

const SideSheet = ({ handelClose, handelExpand }) => {
    const sideSheet = useRef(null);
    const isMount = useIsMount();
    const { isShow } = useHideShowContext();
    const { isExpand } = useHideShowContext();
    const { isChatShow } = useHideShowContext();

    useEffect(() => {
        if (!isMount) {
            if (isExpand) {
                sideSheet.current.classList.remove('sideSheetContainer');
                sideSheet.current.classList.add('sideSheetExpandContainer');
            } else if (!isExpand) {
                sideSheet.current.classList.remove('sideSheetExpandContainer');
                sideSheet.current.classList.add('sideSheetContainer');
            }
        }
    }, [isExpand]);
    
    return (
        <div className={isShow || isChatShow ? "sideSheetContainer" : "hideSideSheetContainer"} ref={sideSheet}>
            {isShow ? <SideSheetContent handelClose={handelClose} handelExpand={handelExpand} /> : null}
            {/* {isChatShow ? <ChatContent handelClose={handelClose} handelExpand={handelExpand} /> : null} */}
        </div>
    )
}
export default SideSheet;