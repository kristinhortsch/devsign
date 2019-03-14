import React, { Fragment } from 'react';
import { Main } from './LoadingStyles';

export default function Loading() {
  return (
    <Fragment>
      <Main>
        <h1>...LOADING</h1>
        <div className="container">
          <div className="path">
            <span id="elem" className="shape trail">
              <img src="../assets/logo.png" alt="logo"/>
            </span> 
          </div>
        </div>
      </Main>
    </Fragment>
  );
}
