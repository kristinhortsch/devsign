import React from 'react';
import styled from 'styled-components';

const Section = styled.section` 
  width: 90vw;
  margin-top: 0;
  display: flex;
  h4 {
    font-weight: 300;
    margin: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 70vw;
  }
  .body {
    width: 55vw;
  }
  img {
    margin-right: 10px;
  }
  .handle {
    margin: 0 0 10px 0;
  }
`;
export default function Chirp() {
  return (
    <Section>
      <img src="../../assets/prof-pic.png" alt="prof-pic" height="40px"/>
      <div className="info">
        <h4>UserName</h4>
        <p className="handle">@userhandle</p>
        <p className="body">My name is somewhat extravagant, and I want to cut back. Its the good costumes, all year long. #mybite #randomtweet</p>
      </div>
    </Section>
  );
}
