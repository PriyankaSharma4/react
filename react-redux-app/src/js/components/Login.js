import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {loginUser} from '../actions/loginAction';
import {connect} from 'react-redux';
export class Login extends React.Component{
	constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  handleChange(key, event){
    this.setState({[key]: event.target.value});
  }

  handleSubmit = (e) => {
   const {email,password}=this.state;
      let params={
        email: email, password: password
      };
      console.log(params);
      this.props.loginUser(params);  
  }
	render() {
    const { email, password } = this.state;
    return ( 
      <div> 
      <Link to="/"> Back </Link>           
       	  <div id="login">
  	        <input type="email" id="email" name='email' label='Email' placeholder="Email" value={email} onChange={this.handleChange.bind(this, 'email')}/><br/>
  	        <input type="password" id="password" name='password' label='Password' placeholder="Password" value={password} onChange={this.handleChange.bind(this, 'password')}/><br/>
          </div>
        <button id="Submit" value='Login' onClick={this.handleSubmit}>Submit</button>
      </div>
    	)
  }
}

const mapStateToProps = (store) => {
  return{
    login: store.login,
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      loginUser : (params) => dispatch(loginUser(params) ),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
