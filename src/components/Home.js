import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Trending from './Trending';
import PopularChirps from './PopularChirps';
import MiniProfile from './MiniProfile';
import ModalContainerChirp from '../containers/ModalContainerChirp';
import '../css/App.css';

export default function DesktopHome() {
  return (
    <body>
      <Header />

      <MiniProfile />

      <Trending />

      <PopularChirps />

      <ModalContainerChirp />

      <Footer />
    </body>
  );
}
