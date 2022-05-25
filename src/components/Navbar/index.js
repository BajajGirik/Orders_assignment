import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../constants/routes';
import firebaseAuth from '../../firebase';
import {authFailed} from '../../redux/auth/actions';
import './index.css';

function Navbar({auth, dispatch}) {

  const logout = async () => {
	try {
		await firebaseAuth.signOut()
		dispatch(logout());
	} catch(err) {
		dispatch(authFailed("", "Error signing out!"));
		alert("Error signing out!");
		console.log(err);
	}
  }

  if(!auth.isLoggedIn) return null;
  return (
	<nav>
		<Link to={ROUTES.HOME}><h3>Welcome {auth.user.displayName}!</h3></Link>
		<div>
			<Link to={ROUTES.ADD}><button>Add Order</button></Link>
			<button onClick={logout}>Logout</button>
		</div>
	</nav>
  )
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(Navbar)