import React from 'react';

import './Sidebar.css';

const AddRow = ({ open, closeAddRow, addRowWithColumns }) => (
  <div className={`sidebar add-row ${open ? 'open' : ''}`}>
    <div className="close-btn" onClick={() => closeAddRow()}>X</div>
    <div className="title">Add Row</div>
    <div className="options">
      <div className="option" onClick={() => addRowWithColumns(1)}>1 Column</div>
      <div className="option" onClick={() => addRowWithColumns(2)}>2 Column</div>
      <div className="option" onClick={() => addRowWithColumns(3)}>3 Column</div>
      <div className="option" onClick={() => addRowWithColumns(4)}>4 Column</div>
      <div className="option" onClick={() => addRowWithColumns(5)}>5 Column</div>
      <div className="option" onClick={() => addRowWithColumns(6)}>6 Column</div>
    </div>
  </div>
);

export default AddRow;
