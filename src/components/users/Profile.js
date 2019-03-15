import React, { Fragment } from 'react';
import Header from '../app/Header';
import Trending from '../chirps/Trending';
import UserChirpsContainer from '../../containers/UserChirpsContainer';
import { Main, Div1, Div2, Wrapper } from './ProfileStyles';
import PropTypes from 'prop-types';
import 'normalize.css';

export default function Profile({ handle, profileImg, name }) {
  return (
    <Fragment>
      <Header />
      <Main>
        <section>
          <img src="https://res.cloudinary.com/khortsch/image/upload/v1552673467/background_8.44.32_PM.jpg" alt="background" className="background"/>
          <div className="section">
            <img src={profileImg} alt="prof pic" className="prof"/>
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
          </div>
        </section>

        <Wrapper>
          <Div2>
            <section className="sideprof">
              <div className="name">
                <h3>{name}</h3>
                <p className="handle">@{handle}</p>
              </div>
              <div className="description">
                <p>Lover of the laughing, sports, and all things coding.</p>
              </div>
            </section>
            <section className="trending">
              <Trending />
            </section>
          </Div2>
          <Div1>
            <UserChirpsContainer />
          </Div1>
        </Wrapper>
        
      </Main>
    </Fragment>
  );
}

Profile.propTypes = {
  handle: PropTypes.string,
  profileImg: PropTypes.string,
  name: PropTypes.string
};

