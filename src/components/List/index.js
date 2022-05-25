import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { deleteOrder } from '../../redux/orders/actions';
import './index.css';

function List({auth, orders, dispatch}) {
  const [selectedId, setSelectedId] = useState("");
  const navigate = useNavigate();
  console.log(selectedId);

  const resetSelectedId = (e) => {
	e.stopPropagation();
	setSelectedId("");
  }

  if(!auth.isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace />

  return (
	<>
		<h4 className='Basic_info'>Click a Row to see more options (Edit/Delete)</h4>
		<table>
			<thead>
				<tr>
					<th>Order ID</th>
					<th>Customer Name</th>
					<th>Customer Email</th>
					<th>Product</th>
					<th>Quantity</th>
				</tr>
			</thead>

			<tbody>
			{orders.data.map(({id, customer_name, customer_email, product, quantity}) => 
				<tr key={id} className={selectedId === id ? "hide" : ""} onClick={() => setSelectedId(id)}>
					<td className={selectedId === id ? "hide" : ""}>{id}</td>
					<td className={selectedId === id ? "hide" : ""}>{customer_name}</td>
					<td className={selectedId === id ? "hide" : ""}>{customer_email}</td>
					<td className={selectedId === id ? "hide" : ""}>{product}</td>
					<td className={selectedId === id ? "hide" : ""}>{quantity}</td>
					<td className={selectedId === id ? "Options show": "Options"}>
						<button onClick={() => navigate(ROUTES.EDIT + `/${id}`)}>Edit</button>
						<button onClick={() => dispatch(deleteOrder(id))}>Delete</button>
						<button onClick={resetSelectedId}>Revert Back</button>
					</td>
				</tr>
			)}
			</tbody>
		</table>
	</>
  )
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(List)