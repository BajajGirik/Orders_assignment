import {} from "./actionTypes";

const initialState = {
	isLoggedIn: false,
	data: {},
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {

		default: return state;
	}
}

export default authReducer;