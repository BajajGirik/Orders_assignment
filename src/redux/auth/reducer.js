import { INITIATE_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
	loading: true,
	isLoggedIn: false,
	user: {},
	msg: "",
	err: ""
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case INITIATE_LOGIN:
			return {...state, loading: true};

		case LOGIN_SUCCESS:
			return {
				loading: false,
				isLoggedIn: true, 
				user: action.payload
			};

		case LOGIN_FAILED:
			return {
				...initialState,
				loading: false,
				msg: action.payload.msg,
				err: action.payload.err,
			}
		default: return state;
	}
}

export default authReducer;