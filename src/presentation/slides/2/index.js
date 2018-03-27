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
    <div
      className={style.columnClass}
    >
      <Text className={style.flow}>
        Seamless communication and coordination
      </Text>
      <Image
        src={images.iosTimeline.replace("/", "")}
        className={style.iosTimeline}
      />
    </div>
    <Logo styles={{ marginTop: '-105%', marginLeft: '90%' }} />
  </Slide>
);
