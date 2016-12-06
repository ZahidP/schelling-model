import {combineReducers} from "redux";
import * as ActionTypes from "../actions/actionTypes";

const rootReducer = combineReducers({
	initialParams: initialParamsReducer
});

export default rootReducer;

const initialNumberOfTiles = 40;
const initialNumberOfTypes = 3;

const initialParamsDefault = {
	initialNumberOfTiles,
	initialNumberOfTypes
};

export function initialParamsReducer(state = initialParamsDefault, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_NUMBER_OF_TILES:
			return {
				initialNumberOfTypes: state.initialNumberOfTypes,
				initialNumberOfTiles: action.payload
			};
		case ActionTypes.UPDATE_NUMBER_OF_TYPES:
			return {
				initialNumberOfTypes: action.payload,
				initialNumberOfTiles: state.initialNumberOfTiles
			};
		default:
			return state;
	}
}


// 	return [
// 		{
// 			id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
// 			completed: false,
// 			text: action.text
// 		},
// 		...state
// 	]
//
// case DELETE_TODO:
// 	return state.filter(todo => todo.id !== action.id)
//
// case EDIT_TODO:
// 	return state.map(todo => todo.id === action.id
// 		? {
// 			...todo,
// 			text: action.text
// 		}
// 		: todo)
