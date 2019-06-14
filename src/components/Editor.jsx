import React, { Component } from 'react';
import uuid from 'uuid';
import Toolbar from './Toolbar';
import Rows from './Rows';
import AddRow from './AddRow';
import AddElement from './AddElement';
import Overlay from './Overlay';
import { HEADING, EMPTY } from '../element_types';
import EditingElement from './EditingElement';

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
    addingElementAtPos: null,
    showEditingElement: false,
    elementToEdit: null,
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
    const { showAddRow, showAddElement, showEditingElement } = this.state;

    if (showAddRow) {
      this.toggleAddRow();
    }

    if (showAddElement) {
      this.toggleAddElement();
    }

    if (showEditingElement) {
      this.toggleEditElement();
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
      const { columns } = rows[i];

      for(let j=0; j<columns.length; j++) {
        const { element } = columns[j];
        if (element.type === EMPTY) {
          return { rowPos: i, columnPos: j };
        }
      }
    }

    return { rowPos: null, columnPos: null };
  }

  addNewElement = ({ element }) => {
    // If we have some position to which element is being added
    const { addingElementAtPos } = this.state;

    if (addingElementAtPos) {
      console.log('adding element at pos --> ', addingElementAtPos);
      const { rowPos, columnPos } = addingElementAtPos;
      this.addNewElementAtPos({ rowPos, columnPos, element });
      return;
    }

    // Insert element at first empty element
    const { rowPos, columnPos } = this.getFirstEmptyColumn();
    console.log('got first empty element --> ', rowPos, columnPos);

    // No empty element found, create a new row with single column and then insert element into it
    if (rowPos === null || columnPos === null) {
      // new row added
      const columnElements = [element];
      this.addNewRow({ noOfColumns: 1, columnElements });
    } else {
      this.addNewElementAtPos({ rowPos, columnPos, element });
    }
  }

  addNewElementAtPos = ({ rowPos, columnPos, element }) => {
    if (rowPos === -1 || columnPos === -1) {
      console.error('invalid position --> ', rowPos, columnPos);
      return;
    }

    const { rows } = this.state;

    const rowData = rows[rowPos];

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

    this.setState({ rows: updatedRows, addingElementAtPos: null });
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

  addElementClicked = ({ rowPos, columnPos }) => {
    this.setState({ addingElementAtPos: {rowPos, columnPos} }, () => this.toggleAddElement());
  }

  elementClicked = (element) => {
    const { type, rowPos, columnPos, data } = element;
    console.log('element clicked --> ', type, data, rowPos, columnPos);
    this.setState({ elementToEdit: element });
    this.toggleEditElement();
  }

  editElementSubmitted = (value) => {
    console.log('data submit for edit element --> ', value);
    this.closeEditElement();
  }

  toggleEditElement = () => {
    const { showEditingElement } = this.state;
    this.setState({ showEditingElement: !showEditingElement });
  }

  closeEditElement = () => this.setState({ showEditingElement: false, elementToEdit: null })

  render() {
    const { showAddRow, showAddElement, rows, showEditingElement, elementToEdit } = this.state;

    return (
      <EditorContext.Provider value={{ addElementClicked: this.addElementClicked, elementClicked: this.elementClicked }}>
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
          <EditingElement
            open={showEditingElement}
            elementToEdit={elementToEdit}
            onSubmit={this.editElementSubmitted}
            closeEditElement={this.closeEditElement}
          />
          <Overlay show={showAddRow || showAddElement || showEditingElement} overlayClicked={() => this.overlayClicked()} />
        </div>
      </EditorContext.Provider>
    );
  }
}

export default Editor;
