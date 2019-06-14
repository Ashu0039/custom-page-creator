import React from 'react';

const AddElement = ({ open, closeAddElement, addHeading, addImage }) => (
  <div className={`sidebar add-element ${open ? 'open' : ''}`}>
    <div className="close-btn" onClick={() => closeAddElement()}>X</div>
    <div className="title">Add Element</div>
    <div className="options">
      <div className="option" onClick={() => addHeading()}>Heading</div>
      <div className="option" onClick={() => addImage()}>Image</div>
    </div>
  </div>
);

export default AddElement;
