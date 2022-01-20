import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";

const useMousePosition = () => {
  let [mousePosition, setMousePosition] = useState({ x: null, y: null });
  // console.log('useMousePosition hook: ')
  useEffect(() => {
    const handlePosition = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", throttle(100, handlePosition));
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;

//method argument of event listeners, is what will be called when the specified event is called
//client X/Y which are the coordinates will be used in the onMouse function
