import { createContext, useContext, useEffect, useState } from "react";
import { useIsMount } from "../hooks/useMount";

export const HideShowContext = createContext({ isShow: false, isRtl: false })

export default function HideShowContextProvider({ children, isHideShow, isRightToLeft }) {
    const [isShow, setShow] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    const isMount = useIsMount();

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

    return (
        <HideShowContext.Provider value={{ isShow, isRtl }} >
            {children}
        </HideShowContext.Provider>
    )
}

export const useHideShowContext = () => useContext(HideShowContext);