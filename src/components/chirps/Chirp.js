import React from 'react';
import { Section } from './ChirpStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function Chirp({ id, text, handle, name, profileImg, userName, timestamp }) {
  return (
    <>
      {userName !== name && 
        <Section>
          <img src={profileImg} alt="prof-pic" height="40px" className="prof-pic"/>
          <div className="info">
            <h4 className="name">{name}</h4>
            <h5 className="handle">@{handle}</h5>
            <p className="body">{text}</p>
            <p>{moment(timestamp).format('dddd, MMMM Do YYYY, h:mm a')}</p>
            <img src="https://res.cloudinary.com/khortsch/image/upload/v1555710486/heart.png" width="20px" alt="heart" />            
          </div>
        </Section>
      }

      {userName === name && 
        <Section>
          <img src={profileImg} alt="prof-pic" height="40px" className="prof-pic"/>
          <div className="info">
            <h4 className="name">{name}</h4>
            <h5 className="handle">@{handle}</h5>
            <p className="body">{text}</p>
            <p>{moment(timestamp).format('dddd, MMMM Do YYYY, h:mm a')}</p>
            <img src="https://res.cloudinary.com/khortsch/image/upload/v1555710486/heart.png" width="20px" alt="heart" />            
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
  id: PropTypes.string,
  timestamp: PropTypes.string
};
