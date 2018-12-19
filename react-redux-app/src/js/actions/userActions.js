import axios from 'axios';
export function fetchUser(){
	return function(dispatch){
	axios.get('http://localhost:3000/api/users')
	 	.then((response)=>{
	dispatch ({type: 'FETCH_USER_FULLFILLED',payload:response.data})
	})
}
}
