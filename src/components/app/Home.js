import React, { Fragment } from 'react';
import Header from './Header';
import Trending from '../chirps/Trending';
import ChirpsContainer from '../../containers/PopularChirpsContainer';
import MiniProfile from '../users/MiniProfile';
import styled from 'styled-components';
import { login } from '../../services/auth';

const Div1 = styled.div`
  @media only screen and (max-width:600px)  { 
    display: none;
  }
  width: 22%;
  margin-left: 80px;
  margin-right: 20px;
`;

const Div2 = styled.div`
  @media only screen and (max-width:600px)  { 
    width: auto;
  }
  @media only screen and (min-width:601px)  { 
    width: 60%;
    margin-right: 80px;
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
          <ChirpsContainer />
        </Div2>
      </Section>
    </Fragment>
  );
}
