import React, { useEffect, useState } from "react";
import { translateYourSelectedText } from "../end-point";
import { useHideShowContext } from "./context/hideShowContext";
import './side-sheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SideSheet = ({ handelClose }) => {
    const { isShow } = useHideShowContext();
    const handelCloseBtn = (value) => {
        handelClose(value)
    }
    const [selectLanguage, setSelectLanguage] = useState("");
    const [selectText, setSelectText] = useState("");
    const [translatedText, setTranslatedText] = useState("");

    const availableLanguages = [
        { Code: "zh", Display: "Chinese, Simplified (简体中文)" },
        { Code: "en", Display: "English" },
        { Code: "ja", Display: "Japanese (日本語)" },
        { Code: "ru", Display: "Russian (Русский)" },
        { Code: "fr", Display: "French (Français)" },
        { Code: "ko", Display: "Korean (한국어)" },
        { Code: "es", Display: "Spanish (Español)" },
        { Code: "de", Display: "German (Deutsch)" },
        { Code: "pt", Display: "Portuguese (Português)" },
        { Code: "it", Display: "Italian (Italiano)" },
        {
            Code: "ar",
            Display: "Arabic (العربية)",
        },
    ];

    const translate = (selectLanguage, selectText) => {
        translateYourSelectedText(selectLanguage, selectText).then((response) => {
            console.log(response);
            if (response.data.translated_text) {
                setTranslatedText(response.data.translated_text);
                setSelectText("");
                setSelectLanguage("")
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    function getSelectionText() {
        var text = "";
        var activeEl = document.activeElement;
        var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
        if (
            (activeElTagName === "textarea") || ((activeElTagName === "input") && (/^(?:text|search|password|tel|url)$/i.test(activeEl.type))) && (typeof activeEl.selectionStart === "number")
        ) {
            text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
        } else if (window.getSelection) {
            text = window.getSelection().toString();
        }
        return text;
    }

    useEffect(() => {
        document.onmouseup = document.onkeyup = document.onselectionchange = function () {
            if (getSelectionText().length > 0) { setSelectText(getSelectionText()) }
        };
    }, [document.onmouseup, document.onkeyup, document.onselectionchange])

    useEffect(() => {
        if (selectLanguage.length > 0 && selectText.length > 0) {
            translate(selectLanguage, selectText)
        }
    }, [selectLanguage, selectText]);


    return (
        <div className={isShow ? "sideSheetContainer" : "hideSideSheetContainer"}>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="headingController">
                    <div className="heading" >
                        Translation
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ cursor: 'pointer', marginRight: '7px' }}>
                            <FontAwesomeIcon icon={faExpandAlt} />
                        </div>
                        <div style={{ cursor: 'pointer', marginLeft: '5px' }} onClick={() => handelCloseBtn(!isShow)}>
                            <FontAwesomeIcon icon={faTimes} size="xl" />
                        </div>
                    </div>
                </div>
                <div className="selectLanguageContainer">
                    <select name="languages" id="languages" style={{
                        width: '100%', padding: '7px 10px',
                        margin: ' 0% 2%',
                        borderRadius: '5px',
                        border: ' 1px solid #ddd'
                    }} onChange={(event) => {
                        setSelectLanguage(event.target.value)
                    }} >
                        <option key={-1} value="">Select your language</option>
                        {
                            availableLanguages.map((each, i) => (
                                <option key={i} value={each.Code} >{each.Display}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="translateTextContainer">
                    {translatedText}
                </div>
            </div>
        </div>
    )
}
export default SideSheet