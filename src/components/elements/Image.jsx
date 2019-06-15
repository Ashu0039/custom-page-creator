import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EditorContext } from '../Editor';

import './Image.css';

const Image = ({ id, data, type, rowPos, columnPos }) => (
  <EditorContext.Consumer>
    {
      ({
        deleteElementClicked,
      }) => (
        <div  className="element image">
          <div className="element-options">
            <FontAwesomeIcon
              onClick={() => deleteElementClicked({id, data, type, rowPos, columnPos})}
              title="Delete"
              icon="trash"
            />
          </div>
          <img alt="Img Element" src={data} />
        </div>
      )
    }
  </EditorContext.Consumer>
);

export default Image;
