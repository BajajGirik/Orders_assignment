import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function Form({auth, orders, isEdit = false}) {
  const [orderDeatils, setOrderDetails] = useState({
	id: "",
	customer_name: "",
	customer_email: "",
	product: "",
	quantity: ""
  });

  useEffect(() => {

  }, [])

  const handleChange = (e) => setOrderDetails(prev => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = (e) => {
	e.preventDefault();

  }

  if(!auth.isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace />

  return (
	<form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="id">Order ID: </label>
			<input type="text" name="id" onChange={handleChange} />
		</div>
		<div>
			<label htmlFor="customer_name">Customer Name: </label>
			<input type="text" name="customer_name" onChange={handleChange} />
		</div>
		<div>
			<label htmlFor="customer_email">Customer Email: </label>
			<input type="text" name="customer_email" onChange={handleChange} />
		</div>
		<div>
			<label htmlFor="product">Product: </label>
			<input type="text" name="product" onChange={handleChange} />
		</div>
		<div>
			<label htmlFor="quantity">Quantity: </label>
			<input type="text" name="quantity" onChange={handleChange} />
		</div>
	</form>
  )
}

export default connect(mapStateToProps)(Form)