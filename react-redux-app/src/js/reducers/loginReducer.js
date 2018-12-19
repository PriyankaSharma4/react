export default function reducer( state  = {
	response: null,
	isLoading: false,
	error: null
}, action){

	switch(action.type){

		case 'LOGIN_PENDING':
			return {...state, isLoading: true, response: null, error: null}
		case 'LOGIN_FULFILLED':
			return {...state, isLoading: false, response: action.payload.data, error: null }
		case 'LOGIN_REJECTED':
			return {...state, isLoading: false, response: null, error: action.payload.response}
		default:

	}

	return state