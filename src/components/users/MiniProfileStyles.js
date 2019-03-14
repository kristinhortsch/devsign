import styled from 'styled-components';

export const Aside = styled.aside`
  border: 1px solid gray;
  position: relative;
  .background {
    height: 100px;
    z-index: -1;
    width: 100%;
  }
  .profpic {
    height: 7vw;
    margin-top: -50px;
    border-radius: 180px;
  }
  .header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main {
    display: flex;
    font-size: 0.8em;
  }
  h3 {
    margin: 0px;
  }
  p {
    margin: 0px;
  }
  th {
    font-weight: 200;
    padding-right: 10px;
  }
  table {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
  }
`;
