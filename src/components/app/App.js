import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProfileContainer from '../../containers/ProfileContainer';
import ChirpDetailContainer from '../../containers/ChirpDetailContainer';
import Login from '../users/Login';
import Footer from './Footer';
import Loading from './Loading';
import CallbackContainer from '../../containers/CallbackContainer';
import { withSession } from '../../containers/withSession';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import '../../css/App.css';
import 'normalize.css';

library.add(faHome, faWindowClose);

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={withSession(Home)} />
          <Route exact path="/profile" component={withSession(ProfileContainer)} />
          <Route exact path="/profile/:id" component={withSession(ChirpDetailContainer)} />
          <Route  exact path="/callback" component={CallbackContainer} />
          <Route  exact path="/loading" component={Loading} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}
