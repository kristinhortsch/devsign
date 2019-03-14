import styled from 'styled-components';

export const Div1 = styled.div`
  @media only screen and (max-width:600px)  { 
    display: none;
  }
  width: 22%;
  margin-left: 80px;
  margin-right: 20px;
`;

export const Div2 = styled.div`
  @media only screen and (max-width:600px)  { 
    width: auto;
  }
  @media only screen and (min-width:601px)  { 
    width: 60%;
    margin-right: 80px;
  }
`;

export const Section = styled.section`
  @media only screen and (min-width:600px)  { 
    display: flex;
    flex-direction: row;
  }
`;
