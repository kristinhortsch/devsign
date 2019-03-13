import React from 'react';
import styled from 'styled-components';

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
export default function Chirp() {
  return (
    <Section>
      <img src="../../assets/prof-pic.png" alt="prof-pic" height="40px"/>
      <div className="info">
        <h4 className="name">UserName</h4>
        <p className="handle">@userhandle</p>
        <p className="body">My name is somewhat extravagant, and I want to cut back. Its the good costumes, all year long. #mybite #randomtweet</p>
      </div>
    </Section>
  );
}
