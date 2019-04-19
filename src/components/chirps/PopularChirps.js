import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './PopularChirpsStyles';
import Loading from '../app/Loading';

export default function PopularChirps({ chirps, term, onChange, loading }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp timestamp={chirp.timestamp} text={chirp.chirp} handle={chirp.user.nickname} profileImg={chirp.user.picture} name={chirp.user.name} /></li>;
  });
  return (
    <Main>
      {loading && <Loading />}
      <h2>Popular Chirps</h2>
      <label><input type="text" name="search" placeholder="Search" value={term} onChange={onChange} /></label>
      <ul>
        {listOfChirps}
      </ul>
    </Main>
  );
}

PopularChirps.propTypes = {
  chirps: PropTypes.array,
  term: PropTypes.string,
  onChange: PropTypes.func,
  loading: PropTypes.bool
};
