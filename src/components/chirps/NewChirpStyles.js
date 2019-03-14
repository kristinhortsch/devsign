import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-right: 10px;
  }
  .body {
    display: flex;
  }
  .chirpbutton {
    background: #00bfff;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: 1 px solid darkgray;
    width: 50%;
    margin-top: 10px;
  }
  textarea {
    border: 1px solid black;
  }
  label {
    color: white;
  }
  span {
    font-size: 1px;
  }
`;
