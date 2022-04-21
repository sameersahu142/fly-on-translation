import { createContext, useContext, useEffect, useState } from "react";
import { useIsMount } from "../hooks/useMount";

export const HideShowContext = createContext({ isShow: false, isRtl: false, isExpand: false, isChatShow: false });

export default function HideShowContextProvider({ children, isHideShow, isRightToLeft, isExpandClose,isChatHideShow }) {
    const [isShow, setShow] = useState(false);
    const [isRtl, setIsRtl] = useState(null);
    const [isExpand, setIsExpand] = useState(false);
    const isMount = useIsMount();
    const [isChatShow, setIsChatShow] = useState(false);

    useEffect(() => {
        if (!isMount) {
            setShow(isHideShow)
        }
    }, [isHideShow]);

    useEffect(() => {
        if (!isMount) {
            setIsRtl(isRightToLeft)
        }
    }, [isRightToLeft])

    useEffect(() => {
        if (!isMount) {
            setIsExpand(isExpandClose)
        }
    }, [isExpandClose]);

    useEffect(() => {
        if (!isMount) {
            setIsChatShow(isChatHideShow)
        }
    }, [isChatHideShow])

    return (
        <HideShowContext.Provider value={{ isShow, isRtl, isExpand, isChatShow }} >
            {children}
        </HideShowContext.Provider>
    )
}

export const useHideShowContext = () => useContext(HideShowContext);