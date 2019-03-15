import styled from 'styled-components';

export const Main = styled.main`
  h2 {
    font-weight: 300;
    text-align: center;
  }
  input {
    margin-left: 27%;
    padding: 8px;
    border: 1px solid #00bfff;
    box-shadow: 1px 1px 5px #00bfff;
  }
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
