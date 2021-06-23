import React, { Component } from 'react';
import Hero from '../components/hero';
import MainContainer from '../components/main';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Hero />
        <MainContainer />
      </>
    );
  }
}

export default Home;
