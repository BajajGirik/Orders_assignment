import { DUMMY_ORDERS } from "../../constants/dummyData";
import { ADD_ORDER_SUCCESS, ORDER_ERROR, DELETE_ORDER_SUCCESS } from "./actionTypes";

const initialState = {
	data: DUMMY_ORDERS,
	msg: "",
	err: ""
}

const orderReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_ORDER_SUCCESS:
			return {
				data: [...state.data, action.payload],
				msg: "",
				err: ""
			};

		case DELETE_ORDER_SUCCESS:
			return {
				data: state.data.filter(item => item.id !== action.payload),
				msg: "",
				err: ""
			};

		case ORDER_ERROR:
			return {
				...state,
				msg: action.payload.msg,
				err: action.payload.err
			};

		default: return state;
	}
}

export default orderReducer;