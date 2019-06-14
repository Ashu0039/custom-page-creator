import React, { Component } from 'react';
import uuid from 'uuid';
import Toolbar from './Toolbar';
import Rows from './Rows';
import AddRow from './AddRow';
import AddElement from './AddElement';
import Overlay from './Overlay';
import { HEADING, EMPTY } from '../element_types';

const newId = () => {
  return uuid();
}

const emptyElement = () => {
  return { type: EMPTY };
}

const newHeadingElement = () => {
  return { type: HEADING, data: 'Heading' };
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

const preFilledColumns = (columnElements) => {
  const columns = columnElements.map(element => ({ id: newId(), element }));
  return columns;
};

export const EditorContext = React.createContext({
  addElementClicked: () => {},
});

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

  closeAddRow = () => this.setState({ showAddRow: false })

  toggleAddElement = () => {
    const { showAddElement } = this.state;
    this.setState({ showAddElement: !showAddElement });
  }

  closeAddElement = () => this.setState({ showAddElement: false })

  overlayClicked = () => {
    const { showAddRow, showAddElement } = this.state;

    if (showAddRow) {
      this.toggleAddRow();
    }

    if (showAddElement) {
      this.toggleAddElement();
    }
  }

  addRowWithColumns = (noOfColumns) => {
    console.log('add new row with columns --> ', noOfColumns);
    this.closeAddRow();

    this.addNewRow({ noOfColumns });
  }

  addNewRow = ({ noOfColumns, columnElements }) => {
    const newRow = {
      id: newId(),
      columns: columnElements ? preFilledColumns(columnElements) : emptyColumns(noOfColumns),
    };

    const { rows } = this.state;
    const addingNewRow = [...rows, newRow];

    this.setState({ rows: addingNewRow });
    return newRow.id;
  }

  getFirstEmptyColumn = () => {
    const { rows } = this.state;
    for(let i=0; i<rows.length; i++) {
      const { id: rowId, columns } = rows[i];

      for(let j=0; j<columns.length; j++) {
        const { id: columnId, element } = columns[j];
        if (element.type === EMPTY) {
          return { row: rowId, column: columnId };
        }
      }
    }

    return { row: null, column: null };
  }

  addNewElement = ({ element }) => {
    // Find which row and column to add the heading element
    let rowId;
    const { row, column } = this.getFirstEmptyColumn();
    console.log('got first empty element --> ', row, column);

    if (row === null || column === null) {
      // new row added
      const columnElements = [element];
      this.addNewRow({ noOfColumns: 1, columnElements });
      return;
    } else {
      rowId = row;
    }

    const { rows } = this.state;
    const rowPos = rows.findIndex(r => r.id === rowId);
    if (rowPos === -1) {
      console.error('couldnt find row --> ', rows, rowId);
      return;
    }
    const rowData = rows[rowPos];


    console.log('got row --> ', rowData);
    const columnPos = column === null ? 0 : rowData.columns.findIndex(c => c.id === column);
    console.log('got column pos --> ', columnPos);
    const columnData = rowData.columns[columnPos];
    console.log('row --> ', rowData, ' column ', columnData);

    const updatedColumnData = {
      ...columnData,
      element,
    };

    const updatedRow = {
      ...rowData,
      columns: [...rowData.columns.slice(0, columnPos), updatedColumnData, ...rowData.columns.slice(columnPos + 1)],
    };

    const updatedRows = [...rows.slice(0, rowPos), updatedRow, ...rows.slice(rowPos + 1)];

    this.setState({ rows: updatedRows });
  }

  addHeading = () => {
    console.log('add heading');
    this.toggleAddElement();

    const newElement = newHeadingElement();

    this.addNewElement({ element: newElement });
  } 

  addImage = () => {
    console.log('add image');
    this.closeAddElement();
  }

  elementClicked = ({ type, rowPos, columnPos, data }) => {
    console.log('element clicked --> ', type, data, rowPos, columnPos);
  }

  render() {
    const { showAddRow, showAddElement, rows } = this.state;

    return (
      <EditorContext.Provider value={{ addElementClicked: this.toggleAddElement, elementClicked: this.elementClicked }}>
        <div className="editor">
          <Toolbar addRowClicked={this.toggleAddRow} addElementClicked={this.toggleAddElement} />
          <Rows rows={rows} showAddRow={this.toggleAddRow} />
          <AddRow open={showAddRow} closeAddRow={this.toggleAddRow} addRowWithColumns={this.addRowWithColumns} />
          <AddElement
            open={showAddElement}
            closeAddElement={this.toggleAddElement}
            addHeading={this.addHeading}
            addImage={this.addImage}
          />
          <Overlay show={showAddRow || showAddElement} overlayClicked={() => this.overlayClicked()} />
        </div>
      </EditorContext.Provider>
    );
  }
}

export default Editor;
