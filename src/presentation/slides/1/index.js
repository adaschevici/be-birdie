import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';
import styles from './style.scss';

export default (
  <Slide
    transition={["zoom", "slide"]}
    bgColor="primary"
  >
    <Appear>
      <div>
      <Heading size={6} textColor="primary" caps>Typography</Heading>
      <Heading size={1} textColor="secondary">Heading 1</Heading>
    </div>
    </Appear>
    <Heading size={2} textColor="secondary">Heading 2</Heading>
    <Heading size={3} textColor="secondary">Heading 3</Heading>
    <Heading size={4} textColor="secondary">Heading 4</Heading>
    <Heading size={5} textColor="secondary">Heading 5</Heading>
    <Appear>
      <div className={styles.title}>Standard text</div>
    </Appear>
  </Slide>
);
