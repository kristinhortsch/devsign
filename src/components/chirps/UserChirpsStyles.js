import styled from 'styled-components';

export const Main = styled.main`
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    border: 1px solid lightgray;
    margin: 15px 15px;
    padding: 10px;
  }
  @media only screen and (min-width:601px)  { 
    li {
      width: 90%;
    }
  }
`;
