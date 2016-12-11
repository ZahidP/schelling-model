import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import {App} from "./src/App.jsx";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers/reducers.js";

const store = createStore(reducer);
import "bootstrap/dist/css/bootstrap.min.css";




// ReactDOM.render(
// 	<Provider store={store}>
// 	<Router history={browserHistory}>
// 		<Route path="/" component={App}/>
// 	</Router>
// </Provider>, document.getElementById("app-container"));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app-container")
);
