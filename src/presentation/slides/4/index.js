import React from 'react';
import { Slide, Heading, Text, Appear, CodePane } from 'spectacle';
import styles from './style.scss';

/* eslint-disable */
export default (
  <Slide
    transition={["zoom", "slide"]}
    bgColor="primary"
  >
    <CodePane
      lang="js"
      source={require("raw-loader!../../../assets/code/jscode")}
    />
  </Slide>
);
