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
    border: 1px solid darkgray;
    border-radius: 5px;
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
