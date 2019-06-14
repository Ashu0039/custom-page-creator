import React from 'react';

import Element from './elements/Element';

import './Rows.css';

const Column = ({ column }) => (
  <div className="column">
    <Element {...column.element} />
  </div>
)

const AddNewRow = () => (
  <div className="row add-new-row">
    <button>Add new row</button>
  </div>
);

const Row = ({ row }) => (
  <div className="row">
    {
      row.columns.map(c => <Column column={c} key={c.id} />)
    }
  </div>
);

const Rows = ({ rows }) => (
  <div className="rows">
    {
      rows.length > 0 ? rows.map(r => <Row row={r} key={r.id} />) : <AddNewRow />
    }
  </div>
);

export default Rows;
