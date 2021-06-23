import React from 'react';
import { BsDownload, BsPlayFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import { GiPartyPopper } from 'react-icons/gi';

function MovieButtons() {
  return (
    <div className="ButtonsWrap">
      {' '}
      <div className="PlayButton">
        <span>
          <BsPlayFill size="30px" className="PlayIcon" />
        </span>
        {' '}
        Continuar assistindo
      </div>
      {' '}
      <span className="icons">
        <BsDownload />
      </span>
      {' '}
      <span className="icons">
        <MdAddCircle />
      </span>
      {' '}
      <span className="icons">
        <GiPartyPopper />
      </span>
    </div>
  );
}

export default MovieButtons;
