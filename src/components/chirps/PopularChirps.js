import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import styled from 'styled-components';

const Main = styled.main`
  h2 {
    font-weight: 300;
    text-align: center;
  }
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    border: 1px solid lightgray;
    margin: 15px 15px;
    padding: 10px;
  }
  @media only screen and (min-width:601px)  { 
    li {
      width: 90%;
    }
  }
`;

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
