import React from 'react';
import '../css/signup.css';

export default function Signup() {
  return (
    <form >
      <label> Name
        <input type="text" />
      </label>
      <label> Email
        <input type="text" />
      </label>
      <label> Username
        <input type="text" />
      </label>
      <label> Password
        <input type="password" />
      </label>
      <button type="submit">Signup</button>
    </form>
  );
}
