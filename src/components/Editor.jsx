import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Rows from './Rows';
import AddRow from './AddRow';
import AddElement from './AddElement';
import Overlay from './Overlay';

class Editor extends Component {
  state = {
    showAddRow: false,
    showAddElement: false,
  }

  toggleAddRow = () => {
    const { showAddRow } = this.state;
    this.setState({ showAddRow: !showAddRow });
  }

  toggleAddElement = () => {
    const { showAddElement } = this.state;
    this.setState({ showAddElement: !showAddElement });
  }

  overlayClicked = () => {
    const { showAddRow, showAddElement } = this.state;

    if (showAddRow) {
      this.toggleAddRow();
    }

    if (showAddElement) {
      this.toggleAddElement();
    }
  }

  render() {
    const { showAddRow, showAddElement } = this.state;

    return (
      <div className="editor">
        <Toolbar addRowClicked={this.toggleAddRow} addElementClicked={this.toggleAddElement} />
        <Rows />
        <AddRow open={showAddRow} closeAddRow={() => this.toggleAddRow()} />
        <AddElement open={showAddElement} closeAddElement={() => this.toggleAddElement()} />
        <Overlay show={showAddRow || showAddElement} overlayClicked={() => this.overlayClicked()} />
      </div>
    );
  }
}

export default Editor;
