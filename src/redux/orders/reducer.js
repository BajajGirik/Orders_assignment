import { DUMMY_ORDERS } from "../../constants/dummyData";
import {} from "./actionTypes";

const orderReducer = (state = DUMMY_ORDERS, action) => {
	switch(action.type) {

		default: return state;
	}
}

export default orderReducer;