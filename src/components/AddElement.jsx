import React from 'react';

const AddElement = ({ open, closeAddElement }) => (
  <div className={`sidebar add-element ${open ? 'open' : ''}`}>
    <div className="close-btn" onClick={() => closeAddElement()}>X</div>
    <div className="title">Add Element</div>
  </div>
);

export default AddElement;
