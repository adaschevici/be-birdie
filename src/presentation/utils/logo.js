import React from 'react';
import { Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  logo: require('../../assets/birdie-logo.png'),
};

preloader(images);

const logoClass = {
  marginTop: '-55%',
  marginLeft: '90%',
  height: '140px',
};

export default () => (
  <Image
    style={logoClass}
    src={images.logo.replace("/", "")}
  />
);
