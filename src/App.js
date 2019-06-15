import React from 'react';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash);

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
    </div>
  );
}

export default App;
