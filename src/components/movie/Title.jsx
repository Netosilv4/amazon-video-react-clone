/* eslint-disable react/prop-types */
import React from 'react';
import MoreInfo from './MoreInfo';

function Title(props) {
  const {
    name, details, rating,
    duration,
    year,
    classification,
  } = props;
  return (
    <>
      <h1>{name}</h1>
      <MoreInfo rating={rating} duration={duration} year={year} classification={classification} />
      {details}
      {' '}
      <br />
    </>
  );
}

export default Title;
