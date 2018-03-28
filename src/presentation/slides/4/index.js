import React from 'react';
import { Slide, Image, Text, Appear } from 'spectacle';
import style from './style.scss';

import preloader from "spectacle/lib/utils/preloader";

import Logo from '../../utils/logo';

const images = {
  concerns: require('../../../assets/concerns-phone.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    bgColor="primary"
  >
    <div
      className={style.columnClass}
    >
      <Text className={style.flow}>
        Issues flagged early
      </Text>
      <Image
        src={images.concerns.replace("/", "")}
        className={style.concerns}
      />
    </div>
    <Logo styles={{ marginTop: '-100%', marginLeft: '100%' }} />
  </Slide>
);
