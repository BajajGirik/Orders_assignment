import { ADD_ORDER_SUCCESS, ORDER_ERROR, DELETE_ORDER_SUCCESS, EDIT_ORDER_SUCCESS } from "./actionTypes";

export const addOrder = (order) => {
	return {
		type: ADD_ORDER_SUCCESS,
		payload: order
	};
}

export const editOrder = (order) => {
	return {
		type: EDIT_ORDER_SUCCESS,
		payload: order
	};
}

export const deleteOrder = (orderId) => {
	return {
		type: DELETE_ORDER_SUCCESS,
		payload: orderId	
	};
}

export const orderFailed = (msg, err = "") => {
	return {
		type: ORDER_ERROR,
		payload: { msg, err }
	};
}
