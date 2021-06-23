/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import { IoAdd } from 'react-icons/io5';

class FilmCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      imagePath, name, id, details,
    } = this.props;
    const resume = details.split('').slice(0, 150);
    return (
      <div className="CardDiv">
        <Link to={`/movie/${id}`}>
          <img className="FilmCard" src={imagePath} alt={name} />
        </Link>
        <div className="CardHiddenDiv">
          <div className="CardButtons">
            <div className="PlayWrapper">
              <div className="CardPlayBtn">
                <BiPlay size="35px" />
              </div>
              Reproduzir
            </div>
            <span className="CardAddBtn">
              <IoAdd size="30px" color="white" />
            </span>
          </div>
          <span>Incluido no prime</span>
          <h1 style={{ fontSize: '16px' }}>{name}</h1>
          {resume}
          ...
        </div>
      </div>

    );
  }
}

export default FilmCard;
