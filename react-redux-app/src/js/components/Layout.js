import React, {Component} from 'react';
import {connect} from 'react-redux';
import{BrowserRouter,Route, Link,Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Dashboard from './Dashboard';
export default class Layout extends Component{
	render(){
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/dashboard" component={Dashboard} />
					</Switch>
				</BrowserRouter>
			</div>	
		);
	}
}

