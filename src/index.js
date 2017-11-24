import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'
import NotFound from './components/NotFound.jsx'
import Home from './components/Home.jsx'
import EditUser from './components/EditUser.jsx'
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {Provider } from 'react-redux'
import configureStore from '../configureStore'
var _ = require('lodash');
import {getUserInfo} from "../actions/actions.js"
let store = configureStore();

function requireAuth(nextState){
  // console.log(store.dispatch())
  return new Promise((resolve, reject) => {
    return fetch("http://mytruth.herokuapp.com/user/"+nextState.params.resumeID, {
      //pass cookies, for authentication
      method: 'GET',
      // mode: "no-cors",
      headers:{'Access-Control-Request-Headers': "*"},
    })
    .then(response=>{return response.json()}).then(response=>{console.log(response);store.dispatch(getUserInfo(response[0]));resolve()})
    })
}

ReactDOM.render(
	<Provider store={store} >
	<Router history = {browserHistory}>
	<Route path = "/" component = {App}>
    <IndexRoute component={Home}/>
			<Route path="/:resumeID" component={EditUser} onEnter={requireAuth}/>
	  	<Route path="*" component={NotFound}/>
	</Route>
	</Router>
	</Provider>
	, document.getElementById('root'));
