import React from 'react';
import { Wrapper } from './NewChirpStyles';

export default function NewChirp() {
  return (
    <Wrapper>
      <div className="body">
        <img src='https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' height="40px" alt="prof pic"/>
        <form>
          <label><span>Post</span>
            <textarea name="chirp"></textarea>
          </label>
        </form>
      </div>
      <button type="submit" className="chirpbutton">Chirp!</button>
    </Wrapper>
  );
}
