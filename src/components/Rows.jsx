import React from 'react';

import Element from './elements/Element';

import './Rows.css';

const Column = ({ column, ...rest }) => (
  <div className="column">
    <Element {...rest} {...column.element} />
  </div>
)

const AddNewRow = ({ handleClick }) => (
  <div className="row add-new-row">
    <button onClick={() => handleClick()}>Add new row</button>
  </div>
);

const Row = ({ row, pos }) => (
  <div className="row">
    {
      row.columns.map((c, index) => <Column columnPos={index} rowPos={pos} column={c} key={c.id} />)
    }
  </div>
);

const Rows = ({ rows, showAddRow }) => (
  <div className="rows">
    {
      rows.length > 0 ? rows.map((r, index) => <Row row={r} pos={index} key={r.id} />) : <AddNewRow handleClick={showAddRow} />
    }
  </div>
);

export default Rows;
