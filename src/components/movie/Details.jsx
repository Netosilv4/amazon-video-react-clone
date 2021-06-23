/* eslint-disable react/prop-types */
import React from 'react';

function Details({
  casting, languages, captions, genre,
}) {
  return (
    <>
      <ul className="DetailsList">
        <li>
          <span>Diretores:</span>
          {' '}
          <div>{casting.directors.join(', ')}</div>
        </li>
        <li>
          <span>Atores Principais:</span>
          <div>{casting.actors.join(', ')}</div>
        </li>
        <li>
          <span>Gêneros:</span>
          <div>{genre}</div>
        </li>
        <li>
          <span>Legendas:</span>
          <div>{captions.join(', ')}</div>
        </li>
        <li>
          <span>Idiomas de áudio:</span>
          <div>{languages.join(', ')}</div>
        </li>
      </ul>
    </>
  );
}

export default Details;
