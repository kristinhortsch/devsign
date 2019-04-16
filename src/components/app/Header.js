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
  .home-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    font-weight: 300;
  }
  .home-link {
    text-decoration: none;
    color: black;    
  }
  .profile-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    font-weight: 300;
  }
  .chirp-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 300;
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
          <Link to="/home" name="home" className="home-link">
            <FontAwesomeIcon icon="home" className="home" alt="home link"/>
            <span className="home-label">Home</span>
          </Link>
          <div className="chirp-label">
            <ModalContainerChirp />
            New Chirp
          </div>
          <Link to="/chirps" name="profile" className="profile-label">
            <img src='https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' width="40px" alt="prof pic link"/>
            Profile
          </Link>
        </nav>
      </header>
    </Section>
  );
}
