import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Heading.css';
import './Element.css';
import { EditorContext } from '../Editor';

const Heading = ({ id, data, type, rowPos, columnPos }) => (
  <EditorContext.Consumer>
    {
      ({
        editElementClicked, deleteElementClicked,
      }) => (
        <div className="element heading">
          <div className="element-options">
            <FontAwesomeIcon
              onClick={() => editElementClicked({id, data, type, rowPos, columnPos})}
              title="Edit"
              icon="edit"
            />
            <FontAwesomeIcon
              onClick={() => deleteElementClicked({id, data, type, rowPos, columnPos})}
              title="Delete"
              icon="trash"
            />
          </div>
          { data }
        </div>
      )
    }
  </EditorContext.Consumer>
);

export default Heading;
