import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../actions/registerAction';

export class Register extends Component{
	constructor(props) {
	    super(props);
	    this.state = {username:'', email:'',password:''};
	}

  	handleChange(key, event) {
		this.setState({[key]: event.target.value});
	}

  	handleSubmit=() => {
  		const {username,email,password}=this.state;
  		let params={
  			username: username, email: email, password: password
  		};
  		console.log(params);
	    this.props.registerUser(params);	
  	}

	render() {
	    return(
	    	<div>
	    	<Link to="/"> Back </Link>
	    	<div id="signup">
		        <input type="text" id="name" name='username' placeholder="Name" value={this.state.name} required onChange={this.handleChange.bind(this, 'username')}/><br/>
		        <input type="email" id="email" name='email' placeholder="Email" value={this.state.email} required onChange={this.handleChange.bind(this, 'email')}/><br/>
		        <input type="password" id="password" name='password' placeholder="Password" value={this.state.password} required onChange={this.handleChange.bind(this, 'password')}/><br/>
		        <button onClick={this.handleSubmit}>Submit</button><br/>
	        </div>
	        
	        </div>
	    )
  	}
}


const mapStateToProps = (store) => {
	return{
		register: store.register,
	};
}

const mapDispatchToProps = (dispatch) => {
  	return {
  		registerUser : (params) => dispatch(registerUser(params) ),
  	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);