import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import ModalContainerChirp from '../containers/ModalContainerChirp';
import styled from 'styled-components';

const Main = styled.main`
  .background {
    height: 100px;
    z-index: -1;
    width: 100vw;
    position: absolute;
  }
  .prof {
    height: 100px;
    margin-top: 50px;
  }
  th {
    font-weight: 200;
  }
  table {
    text-align: center;
  }
`;
export default function DesktopProfile() {
  return (
    <Fragment>
      <Header />
      <Main>
        <section>
          <img src="../assets/background.jpg" alt="background" className="background"/>
          <img src="../assets/prof-pic.png" alt="prof pic" className="prof"/>
          <table>
            <tr>
              <th>Chirps</th>
              <th>Followers</th>
              <th>Following</th>
            </tr>
            <tr>
              <td>593</td>
              <td>388</td>
              <td>301</td>
            </tr>
          </table>
        </section>

        <aside>
          <h3>User Name</h3>
          <p>User Handle</p>
          <p>Description</p>
        </aside>

        <section>
          <h2>Tweets</h2>
          <ul>
            <li>Tweet 1</li>
            <li>Tweet 2</li>
            <li>Tweet 3</li>
            <li>Tweet 4</li>
            <li>Tweet 5</li>
          </ul>
        </section>

        <aside>
          <h3>Trending</h3> 
          <ul>
            <li>#Trending 1</li>
            <li>#Trending 2</li>
            <li>#Trending 3</li>
            <li>#Trending 4</li>
            <li>#Trending 5</li>
          </ul>
        </aside>
      </Main>

      <ModalContainerChirp />

      <Footer />
    </Fragment>
  );
}
