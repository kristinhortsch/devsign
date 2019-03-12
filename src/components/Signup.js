import React from 'react';
import '../css/signup.css';

export default function Signup() {
  return (
    <form >
      <label> Name
        <input type="text" name="name"/>
      </label>
      <label> Email
        <input type="text" name="email" />
      </label>
      <label> Username
        <input type="text" name="username"/>
      </label>
      <label> Password
        <input type="password" name="password"/>
      </label>
      <button type="submit">Signup</button>
    </form>
  );
}
