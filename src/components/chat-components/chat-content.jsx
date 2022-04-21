import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './chat-content.css';
import { useHideShowContext } from "../context/hideShowContext";
import ExpandAndCrossIcon from "../expandAndCrossIcon";

const ChatContent = ({ handelClose, handelExpand }) => {
    const { isExpand } = useHideShowContext();


    const handelExpandBtn = (value) => {
        handelExpand(value)
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="headingController">
                <div className="heading">
                    <div className="heading-avatar" >
                        <img style={{ width: "100%", borderRadius: '50px' }} alt="avatar" src="https://avatars.githubusercontent.com/u/92422497?v=4" />
                    </div>
                    <div style={{ marginTop: '2px' }}>
                        <div>{"Exam Proctor"}</div>
                        <div style={{ fontSize: '10px', opacity: '0.7' }} >Mettl Proctor</div>
                    </div>
                </div>
                <ExpandAndCrossIcon handelCloseBtn={handelClose} handelExpandBtn={handelExpandBtn} />
            </div>

            <div className={isExpand ? "chatExpandContainer" : "chatContainer"}>
                {"ll"}
            </div>
            <div className="writeMessageContainer">
                <div>
                    {/* <input type="text" placeholder="Write your message here..." style={{ height: '24px', width: '270px', border: 'none', outline: 'none', opacity: '0.7' }}/> */}
                    <textarea rows="2" cols="35" style={{ border: 'none', outline: 'none', opacity: '0.7' }} placeholder="Write your message here...">
                    </textarea>
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    )
}

export default ChatContent;