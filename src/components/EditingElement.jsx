import React, { Component } from 'react';

import './Sidebar.css';
import { HEADING } from '../element_types';

class EditingElement extends Component {
  state = {
    newData: null,
    sidebarOpen: false,
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { elementToEdit, open } = nextProps;
    const { sidebarOpen } = state;

    // Sidebar props is now closed but state has it open
    // Sidebar has been closed
    if (!open && sidebarOpen) {
      return { newData: null, sidebarOpen: false };
    } else if (open && !sidebarOpen) {
      // sidebar will be opened now
      return { newData: elementToEdit.data, sidebarOpen: true };
    } else {
      return null;
    }
  }
  
  dataUpdated = (newData) => {
    this.setState({ newData });
  }

  getTypeOfInput = () => {
    const { newData } = this.state;
    const { elementToEdit } = this.props;
    const { type } = elementToEdit;

    switch (type) {
      case HEADING:
        return <input type="text" value={newData} onChange={(e) => this.dataUpdated(e.target.value)} />
      default:
        return '';
    }
  }

  submitNewData = () => {
    const { newData } = this.state;
    this.props.onSubmit(newData);
  }

  render() {
    const { open, closeEditElement } = this.props;
  
    return (
      <div className={`sidebar editing-element ${open ? 'open' : ''}`}>
        <div className="close-btn" onClick={() => closeEditElement()}>X</div>
        <div className="title">Editor</div>
        {
          open && this.getTypeOfInput()
        }
        <button className="submit" onClick={() => this.submitNewData()}>Submit</button>
      </div>
    );
  }
}

export default EditingElement;
