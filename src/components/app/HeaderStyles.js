import styled from 'styled-components';

export const Section = styled.section`
 .warble {
    font-size: 4em;
    margin: 10px auto 0 auto;
    font-weight: 300;
    text-align: center;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    padding: 5px 15px 0px 15px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .home {
    font-size: 2em;
    color: black;
  }
  label {
    display: flex;
    flex-direction: column;
    margin: -2px 0 10px 0;
    position: relative;
    justify-content: center;
    align-items: center;
    color: white;
  }
  input {
    margin-left: 10px;
    padding: 8px;
    border: 1px solid #00bfff;
    box-shadow: 1px 1px 5px #00bfff;
  }
  span {
    color: white;
    font-size: 1px;
  }
`;
