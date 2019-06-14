import React from 'react';

import './Sidebar.css';

const AddRow = ({ open, closeAddRow }) => (
  <div className={`sidebar add-row ${open ? 'open' : ''}`}>
    <div className="close-btn" onClick={() => closeAddRow()}>X</div>
    <div className="title">Add Row</div>
  </div>
);

export default AddRow;
