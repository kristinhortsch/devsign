import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #00bfff;
  color: black;
  text-align: center;
  padding: 2px;
  width: 100%;
  position: relative;
  margin-top: 60px;
  height: 60px;
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
