/* eslint-disable react/prop-types */
import React from 'react';

function MoreInfo({
  rating, classification, year, duration,
}) {
  return (
    <div className="MoreInfo">
      <span className="ImdbContainer">
        <span className="ImdbIcon">IMDb</span>
        {' '}
        {rating.toFixed(1)}
      </span>
      <span className="DurationContainer">{`${duration}min`}</span>
      <span className="YearContainer">{year}</span>
      <span className="ClassificationContainer">{classification}</span>
    </div>
  );
}

export default MoreInfo;
