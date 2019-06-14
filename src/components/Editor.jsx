import React from 'react';
import Toolbar from './Toolbar';
import Rows from './Rows';
import AddRow from './AddRow';
import AddElement from './AddElement';

const Editor = () => (
  <div className="editor">
    <Toolbar />
    <Rows />
    <AddRow />
    <AddElement />
  </div>
);

export default Editor;
