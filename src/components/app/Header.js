import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalContainerChirp from '../../containers/ModalContainerChirp';
import styled from 'styled-components';

export const Section = styled.section`
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
  label {
    display: flex;
    flex-direction: column;
    margin: -2px 0 10px 0;
    position: relative;
    justify-content: center;
    align-items: center;
    color: white;
  }
  input {
    margin-left: 10px;
    padding: 8px;
    border: 1px solid #00bfff;
    box-shadow: 1px 1px 5px #00bfff;
  }
  span {
    color: white;
    font-size: 1px;
  }
`;

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
          <Link to="/profile" name="profile"><img src="../../../public/assets/prof-pic.png" width="40px" alt="prof pic link"/><span>Profile</span></Link>
        </nav>
        <label>Search:<input type="text" name="search" placeholder="Search" /></label>
      </header>
    </Section>
  );
}
