import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
 

export default function Chirp({ text, handle, name, profileImg, userName }) {
  return (
    <Section>
      <img src={profileImg} alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">{name}</h4>
        <p className="handle">{handle}</p>
        <p className="body">{text}</p>
      </div>
      {userName === name && <button>X</button>}
    </Section>
  );
}

Chirp.propTypes = {
  text: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  name: PropTypes.string,
  userName: PropTypes.string
};
