import React from 'react';
import { Slide, Image, Text, Appear } from 'spectacle';
import style from './style.scss';

import preloader from "spectacle/lib/utils/preloader";

import Logo from '../../utils/logo';

const images = {
  iosTimeline: require('../../../assets/ios-timeline.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    bgColor="primary"
  >
    <Image
      src={images.iosTimeline.replace("/", "")}
      className={style.iosTimeline}
    />
    <Logo styles={{ marginTop: '-30%', marginLeft: '80%' }} />
  </Slide>
);
