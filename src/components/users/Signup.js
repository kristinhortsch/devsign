import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 20px;
    border: 1px solid gray;
    padding: 8px;
  }
  label {
    margin-bottom: 5px;
  }
  button {
    background: #00bfff;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: 1 px solid darkgray;
  }
`;

export default function Signup() {
  return (
    <Form >
      <label>Name
        <input type="text" name="name"/>
      </label>

      <label>Email
        <input type="text" name="email" />
      </label>

      <label>Username
        <input type="text" name="username"/>
      </label>

      <label>Password
        <input type="password" name="password"/>
      </label>

      <button type="submit">Signup</button>
    </Form>
  );
}
