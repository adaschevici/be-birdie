import React from 'react';
import { Slide, Image, Text, Appear } from 'spectacle';
import style from './style.scss';

import preloader from "spectacle/lib/utils/preloader";

import Logo from '../../utils/logo';

const images = {
  toilets: require('../../../assets/toilets.png'),
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
        Connected devices track activity
      </Text>
      <Image
        src={images.toilets.replace("/", "")}
        className={style.toilets}
      />
    </div>
    <Logo styles={{ marginTop: '-100%', marginLeft: '100%' }} />
  </Slide>
);
