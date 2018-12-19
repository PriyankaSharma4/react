const initialState={
	fetching:false,
	fetched:false,
	user:[]
}
export default function reducer(state=initialState, action){
	switch(action.type){
		case 'FETCH_USER':{
			return{...state,fetching:true}
			break;
		}
		case 'FETCH_USER_FULLFILLED':{
			return{...state, fetching:false, fetched:true, user:action.payload}
			break;
		}
	}
	return state;
}