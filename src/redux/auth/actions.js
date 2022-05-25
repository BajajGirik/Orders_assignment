import { INITIATE_LOGIN, AUTH_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

export const initiateLogin = () => {
	return {
		type: INITIATE_LOGIN
	};
}

export const login = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user
	}
}

export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
}

export const authFailed = (msg, err = "") => {
	return {
		type: AUTH_ERROR,	
		payload: {msg, err}
	}
}