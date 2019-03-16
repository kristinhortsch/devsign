import React from 'react';
import { Wrapper } from './NewChirpStyles';
import PropTypes from 'prop-types';

export default function NewChirp({ onSubmit, onChange, chirp }) {
  return (
    <Wrapper>
      <div className="body">
        <img src='https://res.cloudinary.com/khortsch/image/upload/v1552673467/prof-pic.png' height="40px" alt="prof pic"/>
        <form onSubmit={onSubmit}>
          <label><span>Post</span>
            <input name="chirp" value={chirp} onChange={onChange} />
          </label>
          <button type="submit" className="chirpbutton">Chirp!</button>
        </form>
      </div>
    </Wrapper>
  );
}

NewChirp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  chirp: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
