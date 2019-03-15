import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
 

export default function Chirp({ text, handle, profileImg }) {
  return (
    <Section>
      <img src={profileImg} alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">UserName</h4>
        <p className="handle">{handle}</p>
        <p className="body">{text}</p>
      </div>
    </Section>
  );
}

Chirp.propTypes = {
  text: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string
};
