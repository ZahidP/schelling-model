import * as ActionTypes from "./actionTypes";

export const start = (initialParams) => ({ type: ActionTypes.START, initialParams });
export const nextStep = (id) => ({ type: ActionTypes.NEXT_STEP, id });
export const updateNumberOfTypes = (numTypes) => ({ type: ActionTypes.UPDATE_NUMBER_OF_TYPES, numTypes});
export const updateNumberOfTiles = (numTiles) => ({ type: ActionTypes.UPDATE_NUMBER_OF_TYPES, numTiles});
export const generateInitialGrid = (params) => ({type: ActionTypes.GENERATE_INITIAL_GRID, payload: params});
