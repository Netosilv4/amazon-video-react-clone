/* eslint-disable react/prop-types */
import React from 'react';

function GenreCard(props) {
  const { name, thumb } = props;
  return (
    <div className="GenreCard" style={{ backgroundImage: `url(${thumb})` }}>
      <p>{name}</p>
    </div>
  );
}

export default GenreCard;
