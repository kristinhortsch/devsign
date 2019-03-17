import React from 'react';
import { Wrapper } from './NewChirpStyles';
import PropTypes from 'prop-types';

export default function NewChirp({ onClick, onChange, chirp }) {
  return (
    <Wrapper>
      <div className="body">
        <img src='https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' height="40px" alt="prof pic"/>
        <form>
          <label><span>Post</span>
            <input name="chirp" value={chirp} onChange={onChange} />
          </label>
          <button type="submit" className="chirpbutton" onClick={onClick}>Chirp!</button>
        </form>
      </div>
    </Wrapper>
  );
}

NewChirp.propTypes = {
  onClick: PropTypes.func.isRequired,
  chirp: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
