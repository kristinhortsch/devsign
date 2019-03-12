import React, { Fragment } from 'react';
import Footer from './Footer';
import SingupModalContainer from '../containers/ModalContainerSignup';;

export default function Login() {
  return (
    <Fragment>
      <header>
        <h1>Warble</h1>
        <img src="../assets/logo.png" width="40px"/>
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
            <input type="text" />
          </label>
          <label> Password
            <input type="text" />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>New user?</p>
        

        <SingupModalContainer />
      </main>

      <Footer />
    </Fragment>
  );
}
