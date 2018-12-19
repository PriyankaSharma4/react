import React, {Component} from 'react';
import Register from './Register';
import Login from './Login';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
export default class Home extends Component{
	render() {
	    return(
	    	<div>
	    	<Link to="/register">Register</Link>
	    	<Link to="/login">Login</Link>
	    	<Link to="/dashboard">Dashboard</Link>
	    	</div>
	    )
  	}
}
