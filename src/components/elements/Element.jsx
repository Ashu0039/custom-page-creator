import React from 'react';
import { HEADING, EMPTY, IMAGE } from '../../element_types';
import Heading from './Heading';
import Image from './Image';
import { EditorContext } from '../Editor';

const DefaultElement = ({ type }) => (
  <div>Unknown type { type }</div>
)

const EmptyElement = ({ rowPos, columnPos }) => (
  <EditorContext.Consumer>
    {
      ({
        addElementClicked,
      }) => (
        <div className="element">
          <button className="empty" onClick={() => addElementClicked({ rowPos, columnPos })}>
            Add Element
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
