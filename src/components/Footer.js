import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: lightgray;
  text-align: center;
  padding: 2px;
  width: 100vw;
`;
export default function Footer() {
  return (
    <Section>
      <footer>
        <p>© Warble | 2019 </p>
      </footer>
    </Section>
  );
}





