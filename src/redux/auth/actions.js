import { INITIATE_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes";

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

export const loginFailed = (msg, err = "") => {
	return {
		type: LOGIN_FAILED,	
		payload: {msg, err}
	}
}