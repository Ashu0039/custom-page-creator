import React from 'react';

import './Heading.css';
import { EditorContext } from '../Editor';

const Heading = ({ id, data, type, rowPos, columnPos }) => (
  <EditorContext.Consumer>
    {
      ({
        elementClicked,
      }) => (
        <div className="element heading" onClick={() => elementClicked({id, data, type, rowPos, columnPos})}>{ data }</div>
      )
    }
  </EditorContext.Consumer>
);

export default Heading;
