import React from 'react';
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
`;
export default function PopularChirps() {
  return (
    <Main>
      <h2>Popular Chirps</h2>
      <ul>
        <li><Chirp /></li>
        <li><Chirp /></li>
        <li><Chirp /></li>
        <li><Chirp /></li>
        <li><Chirp /></li>
      </ul>
    </Main>
  );
}
