import React, { Component } from 'react';
import uuid from 'uuid';
import Toolbar from './Toolbar';
import Rows from './Rows';
import AddRow from './AddRow';
import AddElement from './AddElement';
import Overlay from './Overlay';
import { HEADING, EMPTY, IMAGE } from '../element_types';
import EditingElement from './EditingElement';

const newId = () => {
  return uuid();
}

const emptyElement = () => {
  return { type: EMPTY };
}

const newHeadingElement = (data='Heading') => {
  return { type: HEADING, data };
}

const newImageElement = (image) => {
  return { type: IMAGE, data: image };
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
    elementDragged: null,
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

  closeAddElement = () => {
    this.setState({ showAddElement: false })
    return true;
  }

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
    console.log('add new heading element');
    const newElement = newHeadingElement();

    this.addNewElement({ element: newElement });
  } 

  addImage = (files) => {
    console.log('add image --> ', files);
    if (FileReader && files && files.length) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
          const image = fileReader.result;
          console.log('got image --> ', image);
          const newElement = newImageElement(image);
          this.addNewElement({ element: newElement });
      };
      
      fileReader.readAsDataURL(files[0]);
    }
  }

  addElementClicked = ({ rowPos, columnPos }) => {
    this.setState({ addingElementAtPos: {rowPos, columnPos} }, () => this.toggleAddElement());
  }

  editElementClicked = (element) => {
    const { type, rowPos, columnPos, data } = element;
    console.log('element clicked --> ', type, data, rowPos, columnPos);
    this.setState({ elementToEdit: element });
    this.toggleEditElement();
  }

  updateElementData = ({ rowPos, columnPos, value }) => {
    const { rows } = this.state;

    const row = rows[rowPos];
    const { columns } = row;
    const column = columns[columnPos];
    const { element } = column;
    const updatedElement = { ...element, data: value };

    const updatedColumn = { ...column, element: updatedElement };

    const updatedRow = { ...row, columns: [...columns.slice(0, columnPos), updatedColumn, ...columns.slice(columnPos + 1)] };

    const updatedRows = [...rows.slice(0, rowPos), updatedRow, ...rows.slice(rowPos + 1)];

    this.setState({ rows: updatedRows });
  }

  editElementSubmitted = (value) => {
    console.log('data submit for edit element --> ', value);
    const { elementToEdit } = this.state;
    const { type, columnPos, rowPos } = elementToEdit;

    switch (type) {
      case HEADING:
        this.updateElementData({ columnPos, rowPos, value });
        break;
      default:
    }
    this.closeEditElement();
  }

  toggleEditElement = () => {
    const { showEditingElement } = this.state;
    this.setState({ showEditingElement: !showEditingElement });
  }

  closeEditElement = () => this.setState({ showEditingElement: false, elementToEdit: null })

  deleteElementAtPos = ({ rowPos, columnPos }) => {
    if (rowPos === -1 || columnPos === -1) {
      console.error('invalid position --> ', rowPos, columnPos);
      return;
    }

    const { rows } = this.state;

    const rowData = rows[rowPos];

    const columnData = rowData.columns[columnPos];
    // console.log('row --> ', rowData, ' column ', columnData);

    const newEmptyElement = emptyElement();

    const updatedColumnData = {
      ...columnData,
      element: newEmptyElement,
    };

    const updatedRow = {
      ...rowData,
      columns: [...rowData.columns.slice(0, columnPos), updatedColumnData, ...rowData.columns.slice(columnPos + 1)],
    };

    const updatedRows = [...rows.slice(0, rowPos), updatedRow, ...rows.slice(rowPos + 1)];

    this.setState({ rows: updatedRows });
  }

  deleteElementClicked = (element) => {
    const { rowPos, columnPos } = element;
    console.log('delete element clicked --> ', rowPos, columnPos);
    this.deleteElementAtPos({ rowPos, columnPos });
  }

  elementDragged = (elementType) => {
    console.log('element is being dragged --> ', elementType);
    this.setState({ elementDragged: elementType });
    this.closeAddElement();
  }

  addDroppedElement = () => {
    const { elementDragged } = this.state;

    switch(elementDragged) {
      case HEADING:
        this.addHeading();
        break;
      default:
    }

    this.setState({ elementDragged: null });
  }

  elementDropped = (elementDroppedAt) => {
    this.setState({ addingElementAtPos: elementDroppedAt }, () => this.addDroppedElement());
  }

  elementIsDraggedOver = ({ rowPos, columnPos }) => {
    // set the position over which element drag is happening
  }

  dragEndHappened = () => {
    this.setState({ elementDragged: null });
  }

  render() {
    const { showAddRow, showAddElement, rows, showEditingElement, elementToEdit, elementDragged } = this.state;

    return (
      <EditorContext.Provider
        value={{ 
          addElementClicked: this.addElementClicked,
          editElementClicked: this.editElementClicked,
          deleteElementClicked: this.deleteElementClicked,
          elementDropped: this.elementDropped,
          elementIsDraggedOver: this.elementIsDraggedOver,
          isElementDragged: !!elementDragged,
        }}
      >
        <div className="editor">
          <Toolbar addRowClicked={this.toggleAddRow} addElementClicked={this.toggleAddElement} />
          <Rows rows={rows} showAddRow={this.toggleAddRow} />
          <AddRow open={showAddRow} closeAddRow={this.toggleAddRow} addRowWithColumns={this.addRowWithColumns} />
          <AddElement
            open={showAddElement}
            closeAddElement={this.toggleAddElement}
            addHeading={() => this.closeAddElement() && this.addHeading()}
            addImage={(imageFile) => this.closeAddElement() && this.addImage(imageFile)}
            elementDragged={this.elementDragged}
            dragEndHappened={this.dragEndHappened}
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
