// External Imports
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Map from './components/map/map';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/map' component={Map} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
