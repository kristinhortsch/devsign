import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Trending from './Trending';
import PopularChirps from './PopularChirps';

export default function DesktopHome() {
  return (
    <body>
      <Header />

      <aside>
        <img src="../assets/prof-pic.png" width="30px"/>
        <h3>User Name</h3>
        <hr />
        <p>Chirps: 593</p>
        <p>Followers: 388</p>
      </aside>

      <Trending />

      <PopularChirps />

      <Footer />
    </body>
  );
}
