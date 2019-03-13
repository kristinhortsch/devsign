import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Trending from '../chirps/Trending';
import PopularChirps from '../chirps/PopularChirps';
import MiniProfile from '../users/MiniProfile';
import styled from 'styled-components';

const Div = styled.div`
  @media only screen and (max-width:600px)  { 
    display: none;
  }
`;

export default function DesktopHome() {
  return (
    <body>
      <Header />

      <Div>
        <MiniProfile />
      </Div>

      <Div>
        <Trending />
      </Div>

      <PopularChirps />

      <Footer />
    </body>
  );
}
