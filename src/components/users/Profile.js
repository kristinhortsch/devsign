import React, { Fragment } from 'react';
import Header from '../app/Header';
import Footer from '../app/Footer';
import Chirp from '../chirps/Chirp';
import styled from 'styled-components';
import 'normalize.css';

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
  .section {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
  h3 {
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 0.9em;
  }
  .info {
    display: flex;
  }
  .name {
    text-align: center;
    margin-top: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
  .description {
    margin-left: 5px;
    margin-top: 10px;
    margin-right: 10px;
    font-size: 0.8em;
    text-align: center;
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 0.8em;
  }
  h2 {
    font-weight: 300;
    text-align: center;
    margin-top: 5px;
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
 
  @media only screen and (max-width:600px)  { 
    .trending {
      display: none;
    }
  }
`;
export default function DesktopProfile() {
  return (
    <Fragment>
      <Header />
      <Main>
        <section>
          <img src="../assets/background.jpg" alt="background" className="background"/>
          <div className="section">
            <img src="../assets/prof-pic.png" alt="prof pic" className="prof"/>
            <table>
              <thead>
                <tr>
                  <th>Chirps</th>
                  <th>Followers</th>
                  <th>Following</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>593</td>
                  <td>388</td>
                  <td>301</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="info">
          <div className="name">
            <h3>Kristin Hortsch</h3>
            <p>@kristinhortsch</p>
          </div>
          <div className="description">
            <p>Lover of the laughing, sports, and all things coding.</p>
          </div>
        </section>

        <hr></hr>

        <section>
          <h2>Tweets</h2>
          <ul>
            <li><Chirp /></li>
            <li><Chirp /></li>
            <li><Chirp /></li>
            <li><Chirp /></li>
            <li><Chirp /></li>
          </ul>
        </section>

        <aside className="trending">
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

      <Footer />
    </Fragment>
  );
}
