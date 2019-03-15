import React from 'react';
import PropTypes from 'prop-types';
import { Aside } from './MiniProfileStyles';

export default function MiniProfile({ name, handle, profileImg }) {
  return (
    <Aside>
      <img src="https://res.cloudinary.com/khortsch/image/upload/v1552673467/background_8.44.32_PM.jpg" alt="background" className="background"/>
      <div className="main">
        <img src={profileImg} alt="prof pic" className="profpic"/>
        <div className="header">
          <h3>{name}</h3>
          <p>@{handle}</p>
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

MiniProfile.propTypes = {
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  name: PropTypes.string
};
