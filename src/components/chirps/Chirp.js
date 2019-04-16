import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Chirp({ id, text, handle, name, profileImg, userName }) {
  return (
    <Section>
      {userName !== name && 
      <>
        <img src={profileImg} alt="prof-pic" height="40px"/>
        <div className="info">
          <h4 className="name">{name}</h4>
          <p className="handle">{handle}</p>
          <p className="body">{text}</p>
        </div>
      </>
      }

      {userName === name && 
      <Link to={`/chirps/${id}`} className="link">
        <img src={profileImg} alt="prof-pic" height="40px"/>
        <div className="info">
          <h4 className="name">{name}</h4>
          <p className="handle">{handle}</p>
          <p className="body">{text}</p>
        </div>
      </Link>}
    </Section>
  );
}

Chirp.propTypes = {
  text: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  name: PropTypes.string,
  userName: PropTypes.string,
  id: PropTypes.string
};
