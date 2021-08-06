import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        const leftNav = document.getElementById("leftNavDiv");
        const toggleButton = document.getElementById("leftNavPhone");
        // if (toggleButton.style.display == "flex") {
        // leftNav.style.display = "none";
        // leftNav.classList.toggle("active");
        leftNav.classList.remove("active");
        // }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div id="leftNavDiv" ref={wrapperRef}>
      {props.children}
    </div>
  );
}
