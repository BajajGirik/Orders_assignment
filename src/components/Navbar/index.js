import React from 'react';
import { connect } from 'react-redux';
import './index.css';

function Navbar({auth}) {
  if(!auth.isLoggedIn) return null;
  return (
	<nav>
		<h3>ORDERS</h3>
		<div>
			<button>Add Order</button>
			<button>Logout</button>
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