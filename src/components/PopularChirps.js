import React from 'react';
import Chirp from './Chirp';

export default function PopularChirps() {
  return (
    <main>
      <h2>Popular Chirps</h2>
      <ul>
        <li><Chirp /></li>
        <li><Chirp /></li>
        <li><Chirp /></li>
        <li><Chirp /></li>
        <li><Chirp /></li>
      </ul>
    </main>
  );
}
