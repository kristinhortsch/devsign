import React, { Fragment } from 'react';
import Header from './Header';
import Trending from '../chirps/Trending';
import ChirpsContainer from '../../containers/PopularChirpsContainer';
import MiniProfileContainer from '../../containers/MiniProfileContainer';
import { Div1, Div2, Section } from './HomeStyles';

export default function DesktopHome() {
  return (
    <Fragment>
      <Header />
      <Section>
        <Div1>
          <MiniProfileContainer />
          <Trending />
        </Div1>
        <Div2>
          <ChirpsContainer />
        </Div2>
      </Section>
    </Fragment>
  );
}
