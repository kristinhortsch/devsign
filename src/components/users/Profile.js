import React, { Fragment } from 'react';
import Header from '../app/Header';
import Trending from '../chirps/Trending';
import UserChirpsContainer from '../../containers/UserChirpsContainer';
import styled from 'styled-components';
import 'normalize.css';

const Main = styled.main`
  @media only screen and (min-width:600px)  { 
    h3 {
      font-weight: 600;
      margin: 0;
    }
    .handle {
      margin: 0;
      font-size: 0.8em;
    }
    .description {
      font-size: 0.8em;
    }
    .background {
      height: 250px;
      z-index: -1;
      width: 100vw;
      position: absolute;
      margin-bottom: 0;
      padding: 0;
    }
    .prof {
      height: 200px;
      margin-top: 130px;
      margin-left: 80px;
    }
    th {
      font-weight: 200;
    }
    table { 
      text-align: center;
      margin-right: 80px;
      margin-bottom: 30px;
      background: white;
      width: 60%;
      border-bottom: 2px solid black;
      height: 50px;
    }
    .section {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
    }
    .sideprof {
      border: 1px solid gray;
      padding: 10px;
    }  
  }
 
  @media only screen and (max-width:600px)  { 
    .background {
      height: 100px;
      z-index: -1;
      width: 100vw;
      position: absolute;
    }
    .prof {
      height: 80px;
      margin-top: 60px;
    }
    th {
      font-weight: 200;
    }
    table {   
      margin-bottom: -15px; 
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
    .sideprof {
      display: flex;
      margin-bottom: 0;
    }
    .name {
      text-align: center;
      margin-top: 0;
      margin-left: 10px;
      margin-right: 10px;
    }
    .description {
      margin-left: 5px;
      margin-top: 15px;
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
      margin: 0 15px 15px 15px;
      padding: 10px;
      width: 90%;
    }
  }
`;

const Div2 = styled.div`
  @media only screen and (max-width:600px)  { 
    .trending {
      display: none;
    }
  }
  @media only screen and (min-width:600px)  { 
    width: 22%;
    margin-left: 80px;
    margin-right: 20px;
  }
`;

const Div1 = styled.div`
  @media only screen and (min-width:600px)  { 
    width: 60%;
    margin-right: 20px;
    margin-top: -15px;
  }
  @media only screen and (max-width:600px)  { 
    width: 95%
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width:600px)  { 
   flex-direction: column;
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

        <Wrapper>
          <Div2>
            <section className="sideprof">
              <div className="name">
                <h3>Kristin Hortsch</h3>
                <p className="handle">@kristinhortsch</p>
              </div>
              <div className="description">
                <p>Lover of the laughing, sports, and all things coding.</p>
              </div>
            </section>
            <section className="trending">
              <Trending />
            </section>
          </Div2>
          <Div1>
            <UserChirpsContainer />
          </Div1>
        </Wrapper>
        
      </Main>
    </Fragment>
  );
}
