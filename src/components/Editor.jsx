import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Rows from './Rows';
import AddRow from './AddRow';
import AddElement from './AddElement';
import Overlay from './Overlay';
import { HEADING, EMPTY } from '../element_types';

const newId = () => {
  const date = new Date();
  return date.getTime();
}

const emptyElement = () => {
  return { type: EMPTY };
}

const emptyColumns = (noOfColumns) => {
  let columns = [];

  for(let i=0; i<noOfColumns; i++) {
    const column = { id: newId() };
    column.element = emptyElement();
    columns.push(column);
  }

  return columns;
}

class Editor extends Component {
  state = {
    showAddRow: false,
    showAddElement: false,
    rows: [
      {
        id: 1,
        columns: [
          {
            id: 1,
            element: {
              type: HEADING,
              data: 'Hello world!',
            },
          }
        ]
      }
    ],
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

  addRowWithColumns = (columns) => {
    console.log('add new row with columns --> ', columns);
    this.toggleAddRow();

    const newRow = {
      id: newId(),
      columns: emptyColumns(columns),
    };

    const { rows } = this.state;
    const addingNewRow = [...rows, newRow];

    this.setState({ rows: addingNewRow });
  }

  render() {
    const { showAddRow, showAddElement, rows } = this.state;

    return (
      <div className="editor">
        <Toolbar addRowClicked={this.toggleAddRow} addElementClicked={this.toggleAddElement} />
        <Rows rows={rows} />
        <AddRow open={showAddRow} closeAddRow={() => this.toggleAddRow()} addRowWithColumns={this.addRowWithColumns} />
        <AddElement open={showAddElement} closeAddElement={() => this.toggleAddElement()} />
        <Overlay show={showAddRow || showAddElement} overlayClicked={() => this.overlayClicked()} />
      </div>
    );
  }
}

export default Editor;
