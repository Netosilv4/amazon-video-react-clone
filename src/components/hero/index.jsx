import React from 'react';
import heroImage from '../../images/hero/fastAndFurious.webp';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <img src={heroImage} alt="Hero" />
    );
  }
}

export default Hero;
