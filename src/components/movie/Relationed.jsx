/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { films } from '../../data';
import FilmCard from '../main/FilmCard';

function Relationed() {
  return (
    <section className="RelationedContainer">
      <div className="RelationedBtnContainer">
        <button className="RelationedButton" type="button">Relacionados</button>
        <button className="RelationedButton" type="button">Detalhes</button>
      </div>
      <p>Os clientes também assistiram</p>
      <div className="MovieGrid">
        <div className="GridWrapper">
          <div className="MovieGrid">
            { films.map((e) => (
              <FilmCard
                imagePath={e.thumb}
                name={e.name}
                id={e.id}
                details={e.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Relationed;
