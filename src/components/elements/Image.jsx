import React from 'react';

import './Image.css';

const Image = ({ data }) => (
  <img alt="Img Element" className="element image" src={data} />
);

export default Image;
