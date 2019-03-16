import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './PopularChirpsStyles';
import Loading from '../app/Loading';

export default function UserChirps({ chirps, loading }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp text={chirp.text} handle={chirp.user.nickname} profileImg={chirp.user.picture} name={chirp.user.name} /></li>;
  });
  return (
    <Main>
      {loading && <Loading />}
      <h2>My Chirps</h2>
      <ul>
        {listOfChirps}
      </ul>
    </Main>
  );
}

UserChirps.propTypes = {
  chirps: PropTypes.array,
  term: PropTypes.string,
  onChange: PropTypes.func,
  loading: PropTypes.bool
};
