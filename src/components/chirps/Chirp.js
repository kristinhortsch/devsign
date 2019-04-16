import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Chirp({ id, text, handle, name, profileImg, userName }) {
  return (
    <>
      {userName !== name && 
        <Section>
          <img src={profileImg} alt="prof-pic" height="40px"/>
          <div className="info">
            <h4 className="name">{name}</h4>
            <h5 className="handle">@{handle}</h5>
            <p className="body">{text}</p>
          </div>
        </Section>
      }

      {userName === name && 
        <Section>
          <img src={profileImg} alt="prof-pic" height="40px"/>
          <div className="info">
            <h4 className="name">{name}</h4>
            <h5 className="handle">@{handle}</h5>
            <p className="body">{text}</p>
          </div>
          <Link to={`/chirps/${id}`} className="link"><button className="chirp-detail">Chirp Detail</button></Link>
        </Section>
      }
    </>
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
