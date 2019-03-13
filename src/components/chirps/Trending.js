import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
`;

const Ul = styled.ul`
  margin-bottom: 10px;
  padding: 0;
`;

const Aside = styled.aside`
  border: 3px solid blue;
  margin-top: 10px;
  text-align: center;
  h3 {
    font-weight: 200;
  }
`;

export default function Trending() {
  return (
    <Aside>
      <h3>Trending</h3> 
      <Ul>
        <Li>#Bro</Li>
        <Li>#Blessed</Li>
        <Li>#NoFilter</Li>
        <Li>#HumbleBrag</Li>
        <Li>#JustSaying</Li>
        <Li>#NationalWineDay</Li>
        <Li>#RipCity</Li>
        <Li>#WCW</Li>
        <Li>#MCM</Li>
      </Ul>
    </Aside>
  );
}

