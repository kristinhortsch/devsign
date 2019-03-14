import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
 
const Section = styled.section` 
  margin-top: 0;
  display: flex;
  h4 {
    font-weight: 300;
    margin: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .body {
  }
  img {
    margin-right: 10px;
  }
  .handle {
    margin: 0 0 10px 0;
  }
`;

export default function Chirp({ chirp, handle, profileImg }) {
  return (
    <Section>
      <img src={profileImg} alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">UserName</h4>
        <p className="handle">{handle}</p>
        <p className="body">{chirp}</p>
      </div>
    </Section>
  );
}

Chirp.propTypes = {
  chirp: PropTypes.string,
  handle: PropTypes.string,
  profileImg: PropTypes.string
};
