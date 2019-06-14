import React from 'react';

import './Toolbar.css';

const Toolbar = ({ addRowClicked, addElementClicked }) => (
  <div className="toolbar">
    <div className="options">
      <button className="option" onClick={() => addRowClicked()}>Add Row</button>
      <button className="option" onClick={() => addElementClicked()}>Add Element</button>
    </div>
  </div>
);

export default Toolbar;
