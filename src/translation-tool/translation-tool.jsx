import React, { useEffect, useRef, useState } from 'react';
import { useHideShowContext } from '../components/context/hideShowContext';
import FloatingBox from '../components/floating-box';
import { useIsMount } from '../components/hooks/useMount';
import SideSheet from '../components/side-sheet';
import './translation-tool.css';

const TranslationTool = ({ handelClose, handelRtlController, handelExpand }) => {
  const translationTool = useRef(null)
  const { isRtl } = useHideShowContext();
  const [leftPosition, setLeftPosition] = useState(`calc(100` % ` - 100px)`);
  const isMount = useIsMount();
  const dragElement = (evn) => {
    let pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(evn.id + "Controller")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(evn.id + "Controller").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      evn.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      let topPosition = (evn.offsetTop - pos2);
      evn.style.top = topPosition > -1 && topPosition <= 848 ? topPosition + "px" : 848 + "px";
      evn.style.left = leftPosition;
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  useEffect(() => {
    if (translationTool) {
      dragElement(translationTool.current);
    }
  }, [translationTool]);

  useEffect(() => {
    if (isRtl) {
      setLeftPosition(`0px`)
    } else {
      setLeftPosition(`calc(100` % ` - 100px)`)
    }
  }, [isRtl, translationTool]);

  useEffect(() => {
    if (!isMount) {
      if (isRtl) {
        translationTool.current.classList.remove('containerBox');
        translationTool.current.classList.remove('containerAnimation');
        translationTool.current.classList.add('containerBoxRtl');
      } else if(!isRtl) {
        translationTool.current.classList.remove('containerBox');
        translationTool.current.classList.remove('containerBoxRtl');
        translationTool.current.classList.add('containerAnimation');
      }
    }
  }, [isRtl])

  return (
    <>
      <div className={'containerBox'} ref={translationTool} id="floating" >
        <FloatingBox handelClose={handelClose} handelRtlController={handelRtlController} handelExpand={handelExpand} />
        <SideSheet handelClose={handelClose} handelExpand={handelExpand} />
      </div>
    </>
  )
}

export default TranslationTool;