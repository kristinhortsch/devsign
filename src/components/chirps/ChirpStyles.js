import styled from 'styled-components';

export const Section = styled.section` 
  margin-top: 0;
  display: flex;
  flex-direction: row;
  .link {
    text-decoration: none;
    color: black;
  }
  button {
    height: 25px;
    background: red;
    color: white;
    border-radius: 5px;
  }
  .chirp-detail {
    height: 35px;
    background: #00bfff;
    color: white;
    border-radius: 5px;
    font-size: 0.9em;
    cursor: pointer;
  }
  h4 {
    font-weight: 300;
    margin: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .prof-pic {
    border-radius: 180px;
    margin-right: 20px;
  }
  .handle {
    margin: 0 0 10px 0;
    font-weight: 300;
  }
`;
