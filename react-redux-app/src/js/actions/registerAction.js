import axios from 'axios';
export function registerUser(params){
	return function(dispatch){
		return {
		type: "REGISTER",
		payload: axios.post('http://localhost:3000/api/users', params )
	}
	}
}
