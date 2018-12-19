import axios from 'axios';
export function loginUser(params){
	return function(dispatch){
		return {
		type: "Login",
		payload: axios.post('http://localhost:3000/user_token', params )
	}
	}
}