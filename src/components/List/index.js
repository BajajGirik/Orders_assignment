import React from 'react';
import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';
import {ROUTES} from '../../constants/routes';
import './index.css';

function List({auth, orders}) {
  if(!auth.isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace />

  return (
	<table>
		<tr>
			<th>Order ID</th>
			<th>Customer Name</th>
			<th>Customer Email</th>
			<th>Product</th>
			<th>Quantity</th>
		</tr>

		{orders.data.map(({id, customer_name, customer_email, product, quantity}) => 
			<tr>
				<td>{id}</td>
				<td>{customer_name}</td>
				<td>{customer_email}</td>
				<td>{product}</td>
				<td>{quantity}</td>
			</tr>
		)}
	</table>
  )
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(List)