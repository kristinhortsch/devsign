import React, { Fragment } from 'react';
import Footer from '../app/Footer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalContainerSignup from '../../containers/ModalContainerSignup';

const Header = styled.header`
  display: flex;
  margin: 10px 0 10px 10px;
  padding-bottom: 10px;
  h1 {
      font-size: 3.5em;
      font-weight: 100;
      margin: 10px 10px 0 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  input {
    border: 1px solid darkgray;
    padding: 8px;
    border-radius: 7px;
    width: 200px;
    margin-bottom: 25px;
  }
  label {
    margin-bottom: 10px;
  }
  button {
    background: #00bfff;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: 1 px solid darkgray;
  }
`;

const Main = styled.main`
  background: #F5F5F5;
  margin: 0px;
  height: 100vh;
`;

const Wrapper = styled.section`
  text-align: center;
  margin-top: 50px;
  p {
    font-size: 1.5em;
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
        <h2>JOIN WARBLE</h2>
        <ul>
          <li>Explore</li>
          <li>Connect</li>
          <li>Share</li>
        </ul>
      </Aside>

      <Main>
        <Form>
          <label>Username
            <input type="text" name="username" />
          </label>
          
          <label>Password
            <input type="text" name="password" />
          </label>
          
          <Link to='/home' name='home'><button type="submit">Login</button></Link>
        </Form>
        
        <Wrapper>
          <p>New user?</p>
          <ModalContainerSignup />
        </Wrapper>

      </Main>

      <Footer />
    </Fragment>
  );
}
