/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import React from 'react';
import './styles.css';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { films, genres } from '../../data';
import FilmCard from './FilmCard';
import users from '../../userData';
import GenreCard from './GenreCard';
import Footer from '../footer';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.next = this.next.bind(this);
    this.stateSet = this.stateSet.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      recent: [],
      action: [],
      drama: [],
      suspense: [],
      liked: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({
      recent: [...films.filter((film) => users[0].recent.includes(film.id))],
      liked: [...films.filter((film) => !users[0].recent.includes(film.id))],
      action: [...films.filter((film) => film.genre === 'Ação')],
      drama: [...films.filter((film) => film.genre === 'Drama')],
      suspense: [...films.filter((film) => film.genre === 'Suspense')],
    });
  }

  stateSet(target, newArray) {
    this.setState({
      [target]: [...newArray],
    });
  }

  next(array, name) {
    const newArray = [...array];
    newArray.unshift(newArray.pop());
    this.stateSet(name, newArray);
  }

  previous(array, name) {
    const newArray = [...array];
    newArray.push(newArray.shift());
    this.stateSet(name, newArray);
  }

  render() {
    const {
      recent, action, suspense, drama, liked,
    } = this.state;
    return (
      <main className="FilmGallery">
        <p className="FilmTitle">Continuar Assistindo</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(recent, 'recent')} className="previousButton"><FcPrevious color="white" size="40px" /></div>
          <div className="MovieGrid">
            { recent.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(recent, 'recent')} className="nextButton"><FcNext size="40px" /></div>
        </div>
        <p className="FilmTitle">Filmes que achamos que você vai gostar</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(liked, 'liked')} className="previousButton"><FcPrevious size="40px" /></div>
          <div className="MovieGrid">
            { liked.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(liked, 'liked')} className="nextButton"><FcNext size="40px" /></div>
        </div>
        <p className="FilmTitle">Drama</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(drama, 'drama')} className="previousButton"><FcPrevious size="40px" /></div>
          <div className="MovieGrid">
            { drama.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(drama, 'drama')} className="nextButton"><FcNext size="40px" /></div>
        </div>
        <p className="FilmTitle">Ação</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(action, 'action')} className="previousButton"><FcPrevious size="40px" /></div>
          <div className="MovieGrid">
            { action.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(action, 'action')} className="nextButton"><FcNext color="white" size="40px" /></div>
        </div>
        <p className="FilmTitle">Suspense</p>
        <div className="GridWrapper">
          <div onClick={() => this.next(suspense, 'suspense')} className="previousButton"><FcPrevious color="white" size="40px" /></div>
          <div className="MovieGrid">
            { suspense.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
          <div onClick={() => this.previous(suspense, 'suspense')} className="nextButton"><FcNext color="white" size="40px" /></div>
        </div>
        <p className="FilmTitle">Filmes por gênero</p>
        <div className="Genres">
          { genres.map((genre) => <GenreCard name={genre.name} thumb={genre.thumb} />)}
        </div>
        <Footer />
      </main>
    );
  }
}

export default MainContainer;
