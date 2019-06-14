import React from 'react';
import { HEADING, EMPTY, IMAGE } from '../../element_types';
import Heading from './Heading';
import Image from './Image';
import { EditorContext } from '../Editor';

const DefaultElement = ({ type }) => (
  <div>Unknown type { type }</div>
)

const EmptyElement = () => (
  <EditorContext.Consumer>
    {
      ({
        addElementClicked,
      }) => (
        <div className="element">
          <button className="empty" onClick={() => addElementClicked()}>
            Add Element
          </button>
        </div>
      )
    }
  </EditorContext.Consumer>
)

const Element = ({ type, ...others }) => {
  switch(type) {
    case HEADING:
      return <Heading {...others} />
    case IMAGE:
      return <Image {...others} />
    case EMPTY:
      return <EmptyElement {...others} />
    default:
      return <DefaultElement type={type} />
  }
};

export default Element;
