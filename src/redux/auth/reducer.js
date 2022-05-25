import { LOGIN } from "./actionTypes";

const initialState = {
	isLoggedIn: false,
	user: {},
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case LOGIN:
			return {
				isLoggedIn: true, 
				user: action.payload
			};

		default: return state;
	}
}

export default authReducer;