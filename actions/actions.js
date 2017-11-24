import {GETUSERDETAILS} from './actionTypes.js'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import fetch from 'isomorphic-fetch'

export function getUserInfo(object){
  return dispatch => {
    dispatch({
    type : GETUSERDETAILS,
    data : object
  })
  }
}
