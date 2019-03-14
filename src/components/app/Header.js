import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalContainerChirp from '../../containers/ModalContainerChirp';
import { Section } from './HeaderStyles';

export default function Header() {
  return (
    <Section>
      <header>
        <h1 className="warble">Warble</h1>
        <nav className="nav">
          <Link to="/home" name="home"><span>Home</span>
            <FontAwesomeIcon icon="home" className="home" alt="home link"/>
          </Link>
          <ModalContainerChirp />
          <Link to="/profile" name="profile"><img src="../assets/prof-pic.png" width="40px" alt="prof pic link"/><span>Profile</span></Link>
        </nav>
        <label>Search:<input type="text" name="search" placeholder="Search" /></label>
      </header>
    </Section>
  );
}
