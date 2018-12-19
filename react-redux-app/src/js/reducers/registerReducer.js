export default function reducer( state  = {
	response: null,
	isLoading: false,
	error: null
}, action){

	switch(action.type){

		case 'REGISTER_PENDING':
			return {...state, isLoading: true, response: null, error: null}
		case 'REGISTER_FULFILLED':
			return {...state, isLoading: false, response: action.payload.data, error: null }
		case 'REGISTER_REJECTED':
			return {...state, isLoading: false, response: null, error: action.payload.response}
		default:

	}

	return state
}