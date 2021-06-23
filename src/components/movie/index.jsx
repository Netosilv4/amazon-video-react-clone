/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Title from './Title';
import MovieButtons from './MovieButtons';
import Details from './Details';
import './style.css';
import Relationed from './Relationed';
import Footer from '../footer';

function MovieContainer({ movie }) {
  const {
    name, id, casting, captions, details, languages, genre, movieHero,
    rating, duration, year, classification,
  } = movie;
  return (
    <main className="MovieContainer" style={{ backgroundImage: `linear-gradient(90deg, rgba(15,23,30,1) 10%, rgba(0,0,0,0.3) 75%), url(${movieHero})` }}>

      <section className="LeftContainer">
        <Title
          name={name}
          details={details}
          rating={rating}
          duration={duration}
          year={year}
          classification={classification}
        />
        <MovieButtons />
        <Details casting={casting} languages={languages} genre={genre} captions={captions} />
        <div className="Copyright">
          Ao clicar em Reproduzir, você concorda com nossos
          {' '}
          <span className="UserTerms">Termos de uso</span>
        </div>
      </section>
      <section className="RightContainer" />
      <Relationed />
      <Footer />
    </main>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer,
});
export default connect(mapStateToProps, null)(MovieContainer);
