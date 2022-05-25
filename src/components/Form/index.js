import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import {addOrder, editOrder, orderFailed} from '../../redux/orders/actions';
import './index.css';

function Form({auth, orders, dispatch, isEdit = false}) {
  const [orderDetails, setOrderDetails] = useState({
	id: "",
	customer_name: "",
	customer_email: "",
	product: "",
	quantity: ""
  });
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
	const index = orders.data.findIndex(item => item.id === id);

	if(isEdit && index === -1) {
		alert("Order Id not matching! Please select a valid Id to edit");
		navigate(ROUTES.HOME);
	} else if(isEdit) {
		setOrderDetails(orders.data[index]);
	}
  }, [orders, id])

  const handleChange = (e) => setOrderDetails(prev => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = (e) => {
	e.preventDefault();

	if(!Number.isInteger(parseFloat(orderDetails.quantity)) || parseInt(orderDetails.quantity) <= 0) {
		alert("Enter valid inputs!");
		return;
	}

	if(isEdit) {
		dispatch(editOrder(orderDetails));
	} else if(!isEdit && orders.data.findIndex(item => item.id === orderDetails.id) === -1) {
		dispatch(addOrder(orderDetails));
		alert("Order added successfully!");
	} else {
		dispatch(orderFailed("", "Order Id already exists"));
		alert("Order Id already exists");
		return;
	}

	navigate(ROUTES.HOME);
  }

  if(!auth.isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace />

  return (
	<div className='Form__container'>
		<form onSubmit={handleSubmit}>
			<h2>{isEdit ? "Edit an order" : "Add an order"}</h2>

			<div className='Form__input__container'>
				<label htmlFor="id">Order ID: </label>
				<input type="text" name="id" value={orderDetails.id} onChange={handleChange} disabled={isEdit} required />
			</div>
			<div className='Form__input__container'>
				<label htmlFor="customer_name">Customer Name: </label>
				<input type="text" name="customer_name" value={orderDetails.customer_name} onChange={handleChange} required />
			</div>
			<div className='Form__input__container'>
				<label htmlFor="customer_email">Customer Email: </label>
				<input type="email" name="customer_email" value={orderDetails.customer_email}  onChange={handleChange} required />
			</div>
			<div className='Form__input__container'>
				<label htmlFor="product">Product: </label>
				<select name="product" value={orderDetails.product} onChange={handleChange} required>
					<option value="Product 1">Product 1</option>
					<option value="Product 2">Product 2</option>
					<option value="Product 3">Product 3</option>
				</select>
			</div>
			<div className='Form__input__container'>
				<label htmlFor="quantity">Quantity: </label>
				<input type="number" name="quantity" value={orderDetails.quantity} onChange={handleChange} required />
			</div>
			<div className='Form__button__container'>
				<Link to={ROUTES.HOME}><button type='button'>Back</button></Link>
				<button type='submit'>Save</button>
			</div>
		</form>
	</div>
  )
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Form)