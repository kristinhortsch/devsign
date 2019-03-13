import React, { Fragment } from 'react';
import Header from './Header';
import Trending from '../chirps/Trending';
import PopularChirps from '../chirps/PopularChirps';
import MiniProfile from '../users/MiniProfile';
import styled from 'styled-components';

const Div1 = styled.div`
  @media only screen and (max-width:600px)  { 
    display: none;
  }
  width: 30%;
  margin-left: 20px;
  margin-right: 20px;
`;

const Div2 = styled.div`
  @media only screen and (max-width:600px)  { 
    width: auto;
  }
  @media only screen and (min-width:601px)  { 
    width: 65%;
    margin-right: 20px;
  }
  
`;

const Section = styled.section`
  @media only screen and (min-width:600px)  { 
    display: flex;
    flex-direction: row;
  }
`;

export default function DesktopHome() {
  return (
    <Fragment>
      <Header />
      <Section>
        <Div1>
          <MiniProfile />
          <Trending />
        </Div1>
        <Div2>
          <PopularChirps />
        </Div2>
      </Section>
    </Fragment>
  );
}
