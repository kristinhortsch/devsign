import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DesktopHome from '../DesktopHome';
import DesktopProfile from '../DesktopProfile';
import DesktopLogin from '../DesktopLogin';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';

library.add(faHome);

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={DesktopLogin} />
        <Route exact path="/home" component={DesktopHome} />
        <Route exact path="/profile" component={DesktopProfile} />
      </Switch>
    </Router>
    </>
  );
}
