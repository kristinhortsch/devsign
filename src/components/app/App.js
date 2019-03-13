import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from '../users/Profile';
import Login from '../users/Login';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import '../../css/App.css';
import 'normalize.css';
import CallbackContainer from '../../containers/CallbackContainer';
import { withSession } from '../../containers/withSession';

library.add(faHome, faWindowClose);

export default function App() {
  return (
    <Fragment>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={withSession(Home)} />
          <Route exact path="/profile" component={withSession(Profile)} />
          <Route  exact path="/callback" component={CallbackContainer} />
        </Switch>
      </Router>
    

      <Footer />
    </Fragment>
  );
}
