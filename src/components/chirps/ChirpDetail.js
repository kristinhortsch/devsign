import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ChirpDetail({ chirp }) {
  return (
    <Section>
      <img src={chirp.user.profileImg} alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">{chirp.user.name}</h4>
        <p className="handle">{chirp.user.handle}</p>
        <p className="body">{chirp.text}</p>
      </div>
    </Section>
  );
}

ChirpDetail.propTypes = {
  chirp: PropTypes.object
};
