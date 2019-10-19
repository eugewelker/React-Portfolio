import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Jokes from './Jokes';
import Header from './Header';
import './index.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render= {() => <Header><App/></Header>}/>
      <Route path='/jokes' render= {() => <Header><Jokes/></Header>}/>
    </Switch>
  </Router>, document.getElementById('root')
);
