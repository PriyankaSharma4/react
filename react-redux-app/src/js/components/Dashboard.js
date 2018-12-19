import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import {fetchUser} from '../actions/userActions';

export class Dashboard extends Component{

	componentWillMount(){
		this.props.dispatch(fetchUser());
	}
	render(){
		console.log(this.props)
		const { users } = this.props
		let mappedUser=[];

		mappedUser = users.data && users.data.map(user=> <li>{user.name}</li>)

		return (
			<div>
				<ul>{mappedUser}</ul>
		
			</div>

			
		);
	}
}

const mapStateToProps = (store) => {
	return{
		users: store.user.user,
		userFetched: store.user.fetched,
	};
}

export default connect(mapStateToProps)(Dashboard)