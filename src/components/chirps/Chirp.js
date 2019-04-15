import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Chirp({ id, text, handle, name, profileImg, userName, chirp }) {
  return (
    <Section>
      <img src={profileImg} alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">{name}</h4>
        <p className="handle">{handle}</p>
        <p className="body">{text}</p>
      </div>
      {userName === name && <Link to={`/profile/${id}`}><button>X</button></Link>}
    </Section>
  );
}

Chirp.propTypes = {
  text: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  name: PropTypes.string,
  userName: PropTypes.string,
  chirp: PropTypes.object,
  id: PropTypes.string
};
