import React, { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, func) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, func]);
}

export default function OutsideAlerter({ func, id, style, children }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, func);

  return (
    <div id={id} className={style} ref={wrapperRef}>
      {children}
    </div>
  );
}

// export default function OutsideAlerter({ props }) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef, props.func);

//   return (
//     <div id={props.id} className={props.style} ref={wrapperRef}>
//       {props.children}
//     </div>
//   );
// }
