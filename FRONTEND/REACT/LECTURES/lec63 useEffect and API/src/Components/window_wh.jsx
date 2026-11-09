import React, { useEffect, useState } from "react";

export const Window_wh = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      let { innerHeight: h, innerWidth: w } = window;
      setHeight(h);
      setWidth(w);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
        
      <p>Height : {height ? height : ""}</p>
      <p>Width : {width ? width : ""}</p>
    </div>
  );
};
