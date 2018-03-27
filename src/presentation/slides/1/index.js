import React from 'react';
import { Slide, Image, Text, Appear } from 'spectacle';
import style from './style.scss';

import preloader from "spectacle/lib/utils/preloader";

import Logo from '../../utils/logo';

const images = {
  blueHeart: require('../../../assets/blue-heart.png'),
};

preloader(images);

export default (
  <Slide
    transition={["zoom", "slide"]}
    bgColor="primary"
  >
    <Image
      src={images.blueHeart.replace("/", "")}
      className={style.blueHeart}
    />
    <Text
      className={style.greyHelvetica}
    >
      Meet birdie,
    </Text>
    <Text
      className={style.greyHelvetica2}
    >
      your care companion
    </Text>
    <Logo />
  </Slide>
);
