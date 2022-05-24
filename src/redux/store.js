import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import authReducer from "./auth/reducer";
import orderReducer from "./orders/reducer";

const rootReducer = combineReducers({
	auth: authReducer, 
	orders: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;