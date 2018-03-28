import React from 'react';
import { Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  logo: require('../../assets/birdie-logo.png'),
};

preloader(images);

const logoClass = {
  marginTop: '-70%',
  marginLeft: '100%',
  height: '80px',
};

export default (props) => (
  <Image
    src={images.logo.replace("/", "")}
    style={{...logoClass, ...props.styles}}
  />
);
