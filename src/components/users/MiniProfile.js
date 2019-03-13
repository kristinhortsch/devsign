import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  border: 3px solid blue;
  .background {
    height: 70px;
    z-index: -1;
    width: 100%;
  }
  .profpic {
    width: 50px;
    margin-top: -35px;
  }
  h3 {
    margin: 0px;
  }
  p {
    margin: 0px;
  }
`;
export default function MiniProfile() {
  return (
    <Aside>
      <img src="../assets/background.jpg" alt="background" className="background"/>
      <img src="../assets/prof-pic.png" alt="prof pic" className="profpic"/>
      <div>
        <h3>Kristin Hortsch</h3>
        <p>@kristinhortsch</p>
      </div>
      <hr />
      <table>
        <thead>
          <tr>Chirps</tr>
          <tr>Followers</tr>
        </thead>
        <tbody>
          <td>593</td>
          <td>388</td>
        </tbody>
      </table>
      
    </Aside>
  );
}
