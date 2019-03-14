import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  border: 1px solid gray;
  position: relative;
  .background {
    height: 100px;
    z-index: -1;
    width: 100%;
  }
  .profpic {
    height: 8vw;
    margin-top: -50px;
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
export default function MiniProfile() {
  return (
    <Aside>
      <img src="../assets/background.jpg" alt="background" className="background"/>
      <div className="main">
        <img src="../assets/prof-pic.png" alt="prof pic" className="profpic"/>
        <div className="header">
          <h3>Kristin Hortsch</h3>
          <p>@kristinhortsch</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Chirps</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>593</td>
            <td>388</td>
            <td>301</td>
          </tr>
        </tbody>
      </table>
      
    </Aside>
  );
}
