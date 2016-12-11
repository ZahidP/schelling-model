import {combineReducers} from "redux";
import * as ActionTypes from "../actions/actionTypes";
import {createGrid} from "../generate/generate.js";



const initialNumberOfTiles = 20;
const initialNumberOfTypes = 3;

const initialParamsDefault = {
	initialNumberOfTiles: initialNumberOfTiles,
	initialNumberOfTypes: initialNumberOfTypes,
	height: initialNumberOfTiles,
	width: initialNumberOfTiles,
	propEmpty: 0.2
};

export function initialParamsReducer(state = initialParamsDefault, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_NUMBER_OF_TILES:
			return {
				initialNumberOfTypes: state.initialNumberOfTypes,
				initialNumberOfTiles: action.payload,
				height: action.payload,
				width: action.payload,
				propEmpty: 0.2
			};
		case ActionTypes.UPDATE_NUMBER_OF_TYPES:
			return {
				initialNumberOfTypes: action.payload,
				initialNumberOfTiles: state.initialNumberOfTiles,
				height: state.height,
				width: state.width,
				propEmpty: 0.2
			};
		default:
			return state;
	}
}

const generateInitial = (payload) => {
	const {propEmpty, height, width, types} = payload;
	return createGrid(propEmpty, height, width, types);
};

export function gridReducer(state = [], action) {
	switch (action.type) {
		case ActionTypes.GENERATE_INITIAL_GRID:
			return generateInitial(action.payload);
		case ActionTypes.NEXT_STEP:
			return state;
		default:
			return state;
	}
}

export const defTypes = [
	{
		name: "a",
		proportion: 0.40,
		thresh: 0.5
	}, {
		"name": "b",
		proportion: 0.30,
		thresh: 0.4
	}, {
		"name": "c",
		proportion: 0.30,
		thresh: 0.4
	}
];

export const typesReducer = (state = defTypes, action) => {
	switch (action.type) {
		default:
			return state;
	}
};


const rootReducer = combineReducers({
	initialParams: initialParamsReducer,
	grid: gridReducer,
	types: typesReducer
});

export default rootReducer;
