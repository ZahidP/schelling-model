import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('app-container')
);
