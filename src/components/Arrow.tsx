import { useState } from 'react';
import './Arrow.scss';

const Arrow = ({handleClick, dir}) => {
  return (
    <button className="arrow" onClick={handleClick}>
      <i className={`arrow__icon bx bx-chevron-${dir}`}></i>
    </button>
  );
};

export default Arrow;
