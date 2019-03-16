import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { Main } from './UserChirpsStyles';

export default function UserChirps({ chirps, name, handle, profileImg }) {
  const listOfChirps = chirps.map((chirp, i) => {
    return <li key={i}><Chirp chirp={chirp} handle={handle} profileImg={profileImg} name={name} /></li>;
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
  chirps: PropTypes.array,
  handle: PropTypes.string,
  name: PropTypes.string,
  profileImg: PropTypes.string
};
