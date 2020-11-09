import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Route }        from 'react-router';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
        <Router>

          <Link to="/test">
            Click me
          </Link>

          <Switch>
            <Route path="/test">
              <div> It's test </div>
            </Route>
            <Route path={"/listing/landlord/:id/get"}>
              <div> Landlord listing page </div>
            </Route> 
          </Switch>
        </Router>
      </div>
    );
  }
}
