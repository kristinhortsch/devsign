import React from 'react';
import styles from './app/App.css';

export default function NewChirp() {
  return (
    <div className={styles.newChirp}>
      <img src='../assets/prof-pic.png' width="30px"/>
      <form>
        <textarea></textarea>
        <button type="submit">Chirp!</button>
      </form>
    </div>
  );
}
