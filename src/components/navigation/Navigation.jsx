import React, { useRef, useEffect, useState } from "react";

import styles from "./_navigation.module.css";

const items = ["All", "Active", "Completed"];

const Navigation = () => {
  const indicatorRef = useRef();
  const containerRef = useRef();
  const [translate, setTranslate] = useState(0);

  const moveIndicator = (elem) => {
    const offsetLeft = elem.offsetLeft;
    const widthElem = elem.offsetWidth;
    const indiWidth = indicatorRef.current.offsetWidth;
    const translateValue = offsetLeft + widthElem / 2 - indiWidth / 2;
    setTranslate(translateValue);
  };

  const handleClick = (e) => {
    moveIndicator(e.currentTarget);
  };

  useEffect(() => {
    moveIndicator(containerRef.current.firstElementChild);
  }, [containerRef]);

  return (
    <div className={styles.container} ref={containerRef}>
      {items.map((item, i) => (
        <span key={i} className={styles.item} onClick={handleClick}>
          {item}
        </span>
      ))}
      <div
        className={styles.indicator}
        ref={indicatorRef}
        style={{ left: `${translate}px` }}
      ></div>
    </div>
  );
};

export default Navigation;
