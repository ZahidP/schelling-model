import {checkNeighborRatio} from "./checkNeighborRatio";


/**
 * @desc Will call checkNeighborRatio on several tile locations.
 *
 * @param tiles to check
 *
**/
export const isSatisfied = (grid) => {
	const dims = {
		height: grid.length,
		width: grid[0].length
	};
	return grid.map((row, i) => {
		return row.map((col, j) => {
			return checkNeighborRatio(i, j, dims);
		});
	});
};
