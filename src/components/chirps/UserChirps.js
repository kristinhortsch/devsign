import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './UserChirpsStyles';

export default function UserChirps({ chirps }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp chirp={chirp.chirp} handle={chirp.handle} profileImg={chirp.profileImg} /></li>;
  });
  return (
    <Main>
      <ul>
        {listOfChirps}
      </ul>
    </Main>
  );
}

UserChirps.propTypes = {
  chirps: PropTypes.array
};
