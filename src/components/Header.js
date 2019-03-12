import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalContainerChirp from '../containers/ModalContainerChirp';
import './app/App.css';

export default function Header() {
  return (
    <header>
      <h1>Warble</h1>
      <nav>
        <Link to="/home">
          <FontAwesomeIcon icon="home"/>
        </Link>
        
        <ModalContainerChirp />
        
        <img src="../assets/logo.png" width="40px"/>
        <input type="text" placeholder="Search" />
        <Link to="/profile"><img src="../assets/prof-pic.png" width="30px"/></Link>
      </nav>
    </header>
  );
}
  
  



