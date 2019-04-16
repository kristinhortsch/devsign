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
  h4 {
    font-weight: 300;
    margin: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  img {
    border-radius: 180px;
    margin-right: 20px;
  }
  .handle {
    margin: 0 0 10px 0;
    font-weight: 300;
  }
`;
