import React from 'react';
import Footer from './Footer';

export default function DesktopLogin() {
  return (
    <body>
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
        <label> Username
          <input type="text" />
        </label>
        <label> Password
          <input type="text" />
        </label>
        <button type="submit">Login</button>
      </main>

      <Footer />
    </body>
  );
}
