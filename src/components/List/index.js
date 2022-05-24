import React from 'react';
import { connect } from 'react-redux';
import './index.css';

function List({orders}) {
  return (
	<table>
		<tr>
			<th>Order ID</th>
			<th>Customer Name</th>
			<th>Customer Email</th>
			<th>Product</th>
			<th>Quantity</th>
		</tr>

		{orders.map(({id, customer_name, customer_email, product, quantity}) => 
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
	return {
		orders: state.orders 
	};
}

export default connect(mapStateToProps)(List)