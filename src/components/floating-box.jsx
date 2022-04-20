import React from "react";
import { useHideShowContext } from "./context/hideShowContext";
import './floating-box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const FloatingBox = ({ handelClose, handelRtlController }) => {

    const { isRtl } = useHideShowContext();
    const { isShow } = useHideShowContext();
    const handelRtl = (value) => {
        handelRtlController(value)
        handelClose(false);
    }

    const handelOpen = () => {
        handelClose(!isShow)
    }

    return (
        <>
            <div className={isRtl ? "floatingBoxContainerRtl" : "floatingBoxContainer"}  >
                <div className="content">
                    <div style={{ width: '100%', height: '100%' }}>
                        <div className={isRtl ? "hrLineRtl" : "hrLine"} >
                            <div style={{ cursor: 'pointer' }} onClick={() => handelRtl(!isRtl)} >
                                <FontAwesomeIcon icon={isRtl ? faAngleDoubleRight : faAngleDoubleLeft} color='#808080' />
                            </div>
                            <div style={{ cursor: "move" }} id="floatingController">
                                <FontAwesomeIcon icon={faArrowsAlt} color='#808080' />
                            </div>
                        </div>
                        <div className={isShow?"textContainerIsShow":"textContainer"} onClick={handelOpen}>
                            <div style={{ width: '100%' }}>
                                <div className="languageIcon">
                                    <FontAwesomeIcon icon={faLanguage} size="lg" />
                                </div>
                                <div className="translation">
                                    Translation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FloatingBox;