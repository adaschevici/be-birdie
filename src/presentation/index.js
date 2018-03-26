import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';

import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
    primary: "white"
  }, {
    primary: "Helvetica"
});

const importSlides = [
  import('./slides/1'),
  import('./slides/4'),
  import('./slides/2'),
  import('./slides/3'),
];

export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(importSlides.length).fill(<Slide key="loading" />), // placeholder for slides once they're loaded
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(importSlides)
      .then(resolvedSlides => {
        resolvedSlides.forEach(slide => {
          importedSlides.push(slide.default);
        });
        this.setState({ slides: importedSlides });
      });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["slide", "zoom"]} transitionDuration={500} progress="none" theme={theme}>
        {slides.map((slide, index) => React.cloneElement(slide, { key: index }))}
      </Deck>
    );
  }
}
