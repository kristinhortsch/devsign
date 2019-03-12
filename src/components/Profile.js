import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function DesktopProfile() {
  return (
    <body>
      <Header />
      <main>
        <section>
          <img src="../assets/background.jpg"/>
          <img src="../assets/prof-pic.png" width="300px"/>
          <p>Chirps: 593</p>
          <p>Followers: 388</p>
          <p>Following: 301</p>
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
      </main>
      <Footer />
    </body>
  );
}
