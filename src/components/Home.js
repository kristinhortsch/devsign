import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Trending from './Trending';
import PopularChirps from './PopularChirps';
import MiniProfile from './MiniProfile';

export default function DesktopHome() {
  return (
    <body>
      <Header />

      <MiniProfile />

      <Trending />

      <PopularChirps />

      <Footer />
    </body>
  );
}
