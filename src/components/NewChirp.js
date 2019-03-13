import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-right: 10px;
  }
  .body {
    display: flex;
  }
  button {
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
`;

export default function NewChirp() {
  return (
    <Wrapper>
      <div className="body">
        <img src='../assets/prof-pic.png' height="40px" alt="prof pic"/>
        <form >
          <textarea name="chirp"></textarea>
        </form>
      </div>
      <button type="submit">Chirp!</button>
    </Wrapper>
  );
}
