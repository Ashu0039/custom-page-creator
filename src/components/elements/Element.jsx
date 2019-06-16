import React from 'react';
import { HEADING, EMPTY, IMAGE } from '../../element_types';
import Heading from './Heading';
import Image from './Image';
import { EditorContext } from '../Editor';

import './Element.css';

const DefaultElement = ({ type }) => (
  <div>Unknown type { type }</div>
)

const EmptyElement = ({ rowPos, columnPos }) => (
  <EditorContext.Consumer>
    {
      ({
        addElementClicked, elementDropped, elementIsDraggedOver, isElementDragged,
      }) => (
        <div
          className={`element empty ${isElementDragged ? 'element-dragged' : ''}`}
          onDrop={() => elementDropped({ rowPos, columnPos })}
          onDragOver={(e) => e.preventDefault() && elementIsDraggedOver({rowPos, columnPos})}
        >
          <button className="custom-button" onClick={() => addElementClicked({ rowPos, columnPos })}>
            { isElementDragged ? 'Drop here' : 'Add New Element'}
          </button>
        </div>
      )
    }
  </EditorContext.Consumer>
)

const Element = (props) => {
  const { type } = props;
  // let element;

  switch(type) {
    case HEADING:
      return <Heading {...props} />
    case IMAGE:
      return <Image {...props} />
    case EMPTY:
      return <EmptyElement {...props} />
    default:
      return <DefaultElement type={type} />
  }

  // switch(type) {
  //   case HEADING:
  //     element = <Heading {...props} />;
  //     break;
  //   case IMAGE:
  //     element = <Image {...props} />;
  //     break;
  //   case EMPTY:
  //     element = <EmptyElement {...props} />;
  //     break;
  //   default:
  //     element = <DefaultElement type={type} />;
  // }

  // return (
  //   <EditorContext.Consumer>
  //     {
  //       ({
  //         elementClicked,
  //       }) => (
  //         <element onClick={(e) => elementClicked(e)} />
  //       )
  //     }
  //   </EditorContext.Consumer>
  // )
};

export default Element;
