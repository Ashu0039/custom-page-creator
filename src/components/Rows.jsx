import React from 'react';

import Element from './elements/Element';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Rows.css';

const Column = ({ column, ...rest }) => (
  <div className="column">
    <Element {...rest} {...column.element} />
  </div>
)

const AddNewRow = ({ handleClick }) => (
  <div className="row add-new-row">
    <button className="custom-button" onClick={() => handleClick()}>Add new row</button>
  </div>
);

const Row = ({ row, pos, deleteRow }) => (
  <div className="row">
    {
      row.columns.map((c, index) => <Column columnPos={index} rowPos={pos} column={c} key={c.id} />)
    }
    <div className="row-options">
      <FontAwesomeIcon
        onClick={() => deleteRow(pos)}
        title="Delete"
        icon="trash"
      />
    </div>
  </div>
);

const Rows = ({ rows, showAddRow, deleteRow }) => (
  <div className="rows">
    {
      rows.length > 0 ? rows.map((r, index) => <Row deleteRow={deleteRow} row={r} pos={index} key={r.id} />) : <AddNewRow handleClick={showAddRow} />
    }
  </div>
);

export default Rows;
