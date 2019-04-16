import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ChirpDetail({ chirp, name, handle, profileImg, onClick }) {
  return (
    <Section>
      <img src={profileImg} alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">{name}</h4>
        <p className="handle">{handle}</p>
        <p className="body">{chirp.chirp}</p>
      </div>

      <button onClick={onClick}>Remove Chirp</button>

      <Link to="/chirps">Back to Profile</Link>
    </Section>
  );
}

ChirpDetail.propTypes = {
  chirp: PropTypes.object,
  name: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  onClick: PropTypes.func
};
