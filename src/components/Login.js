import React, { Fragment } from 'react';
import Footer from './Footer';
import SingupModalContainer from '../containers/ModalContainerSignup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  margin: 10px 0 10px 0;
  border-bottom: 2px solid black;
  padding-bottom: 10px;

  h1 {
      font-size: 3em;
      font-weight: 100;
      margin: 10px 10px 0 10px;
  }
`;

const Aside = styled.aside`
  @media only screen and (max-width:600px)  { 
    display: none;
  }
`;
export default function Login() {
  return (
    <Fragment>
      <Header>
        <h1>Warble</h1>
        <img src="../assets/logo.png" height="80px" alt="logo"/>
      </Header>

      <Aside>
        <h2>JOIN TWITTER</h2>
        <ul>
          <li>Explore</li>
          <li>Connect</li>
          <li>Share</li>
        </ul>
      </Aside>

      <main>
        <form>
          <label> Username
            <input type="text" name="username" />
          </label>
          <label> Password
            <input type="text" name="password" />
          </label>
          <Link to='/home'><button type="submit">Login</button></Link>
        </form>
        <p>New user?</p>
        

        <SingupModalContainer />
      </main>

      <Footer />
    </Fragment>
  );
}
