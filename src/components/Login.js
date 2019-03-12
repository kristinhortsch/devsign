import React, { Fragment } from 'react';
import Footer from './Footer';
import SingupModalContainer from '../containers/ModalContainerSignup';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default function Login() {
  return (
    <Fragment>
      <header>
        <h1>Warble</h1>
        <img src="../assets/logo.png" width="40px" alt="logo"/>
      </header>

      <aside>
        <h2>JOIN TWITTER</h2>
        <ul>
          <li>Explore</li>
          <li>Connect</li>
          <li>Share</li>
        </ul>
      </aside>

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
