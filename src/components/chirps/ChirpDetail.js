import React from 'react';
import { Section, Div } from './ChirpDetailStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ChirpDetail({ chirp, name, handle, profileImg, onClick }) {
  return (
    <>
      <Section>
        <img src={profileImg} alt="prof-pic" height="60px" className="prof"/>
        <div className="info">
          <h4 className="name">{name}</h4>
          <p className="handle">@{handle}</p>
          <p className="body">{chirp.chirp}</p>
          <Link to="/chirps"><button className="back">Back</button></Link>
        </div>

        <Link to="/chirps"><button className="x" onClick={onClick}>X</button></Link>
      </Section>
      <Div>
        <img src='https://res.cloudinary.com/khortsch/image/upload/v1552673467/logo.png' alt="logo"/>
      </Div>
    </>
  );
}

ChirpDetail.propTypes = {
  chirp: PropTypes.object,
  name: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  onClick: PropTypes.func
};
