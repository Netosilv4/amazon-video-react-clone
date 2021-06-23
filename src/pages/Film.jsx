/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { films } from '../data';
import MovieContainer from '../components/movie';
import currentMovie from '../redux/actions';

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.fetchFilm = this.fetchFilm.bind(this);
    this.state = {
      fetching: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchFilm(id);
  }

  fetchFilm(id) {
    const { movie } = this.props;
    const selected = films.find((e) => e.id === Number(id));
    movie(selected);
    this.setState({
      fetching: false,
    });
  }

  render() {
    const { fetching } = this.state;

    if (fetching) {
      return <h1>Loading</h1>;
    }

    return (
      <MovieContainer />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  movie: (value) => dispatch(currentMovie(value)),
});

export default connect(null, mapDispatchToProps)(Film);
