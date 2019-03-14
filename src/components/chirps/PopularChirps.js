import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './PopularChirpsStyles';

export default function PopularChirps({ chirps }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp chirp={chirp.chirp} handle={chirp.handle} profileImg={chirp.profileImg} /></li>;
  });
  return (
    <Main>
      <h2>Popular Chirps</h2>
      <ul>
        {listOfChirps}
      </ul>
    </Main>
  );
}

PopularChirps.propTypes = {
  chirps: PropTypes.array
};
