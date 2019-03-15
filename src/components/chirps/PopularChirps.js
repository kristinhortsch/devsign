import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './PopularChirpsStyles';

export default function PopularChirps({ chirps, term, onChange }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp text={chirp.text} handle={chirp.handle} profileImg={chirp.profileImg} /></li>;
  });
  return (
    <Main>
      <h2>Popular Chirps</h2>
      <label>Search:<input type="text" name="search" placeholder="Search" value={term} onChange={onChange} /></label>
      <ul>
        {listOfChirps}
      </ul>
    </Main>
  );
}

PopularChirps.propTypes = {
  chirps: PropTypes.array,
  term: PropTypes.string,
  onChange: PropTypes.func
};
