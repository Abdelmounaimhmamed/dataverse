import React from 'react';
import Carousel from 'react-images';

const images = [{ source: 'data.jpeg' }, { source: 'abdelmounaim.jpeg' }];

export class Galerie extends React.Component {
  render() {
    return <Carousel views={images} />;
  }
}