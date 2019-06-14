import React from 'react';

import './Overlay.css';

const Overlay = ({ show, overlayClicked }) => (
  <div onClick={() => overlayClicked()} className={`overlay ${show ? 'show' : ''}`}></div>
);

export default Overlay;
