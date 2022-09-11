/*

//import React from 'react';

import './AboutThisPage.css';


import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";


const AnimationTrigger = ({
  children = ReactNode,
  rootMargin = "100px",
  animation,
  startClass = "",
  endClass = "",
  triggerOnce = false,
  className,
  style=React.CSSProperties
}) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  });
  return (
    <div ref={ref} className={className} style={style}>
      <div className={inView ? animation : startClass}>{children}</div>
      <p>sample</p>
    </div>
  );
};

export default AnimationTrigger;

*/

