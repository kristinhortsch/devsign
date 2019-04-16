import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './PopularChirpsStyles';
import Loading from '../app/Loading';

export default function UserChirps({ chirps, loading, userName, onClick }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp id={chirp._id} onClick={onClick} userName={userName} text={chirp.chirp} handle={chirp.user.nickname} profileImg={chirp.user.picture} name={chirp.user.name} /></li>;
  });
  return (
    <Main>
      {loading === true && <Loading />}
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
  loading: PropTypes.bool,
  userName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string
};
