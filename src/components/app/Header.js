import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalContainerChirp from '../../containers/ModalContainerChirp';
import styled from 'styled-components';

const Section = styled.section`
.warble {
  font-size: 4em;
  margin: 10px auto 0 auto;
  font-weight: 300;
  text-align: center;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    padding: 5px 15px 0px 15px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .home {
    font-size: 2em;
    color: black;
  }
  input {
    display: flex;
    position: relative;
    margin: 10px auto;
  }
`;

export default function Header() {
  return (
    <Section>
      <header>
        <h1 className="warble">Warble</h1>
        <nav className="nav">
          <Link to="/home">
            <FontAwesomeIcon icon="home" className="home"/>
          </Link>
          <ModalContainerChirp />
          <Link to="/profile"><img src="../assets/prof-pic.png" width="40px" alt="prof pic logo"/></Link>
        </nav>
        <input type="text" placeholder="Search" name="search" />
      </header>
    </Section>
  );
}
  
  



