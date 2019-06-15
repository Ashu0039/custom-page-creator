import React from 'react';

import './AddElement.css';
import { HEADING } from '../element_types';

const AddElement = ({ open, closeAddElement, addHeading, addImage, elementDragged }) => (
  <div className={`sidebar add-element ${open ? 'open' : ''}`}>
    <div className="close-btn" onClick={() => closeAddElement()}>X</div>
    <div className="title">Add Element</div>
    <div className="options">
      <div draggable={true} onDragStart={() => elementDragged(HEADING)} className="option" onClick={() => addHeading()}>Heading</div>
      <label htmlFor="upload-image" className="option">
        Image
        <input id="upload-image" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => addImage(e.target.files)} />
      </label>
    </div>
  </div>
);

export default AddElement;
