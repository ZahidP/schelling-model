import {isSatisfied} from "./utility/isSatisfied";
import {checkNeighborRatio} from "./utility/checkNeighborRatio";
import {oobCheck} from "./utility/oobCheck";
import {checkSurroundingTilesAnd} from "./utility/checkSurroundingTilesAnd";

/* TODO: Organization: consider organizing everything by "step"
 * For example: There is the populate step.
 * Then there is the checkSatisfaction step.
 * Then there is the move step.
 */

/* TODO: Additional Considerations
 * We check satisfaction of every single item.
 * However, we then randomly choose household that we might swap or move...
 * These include satisfied households. We can do a check for satisfaction but this is still redundant.
 * Consider choosing randomly from only unsatisfied households.
 * Also, since we do these moves/swaps all at once, we would need to do a again perform a satisfaction check on every single
 * old and new neighbors of the moved/swapped households.
 * This seems highly unperformant. A possible solution is to keep number of moves/swaps to be a low value to we
 * don't tend waste swaps (by moving or swapping households that we previously unsatisfied but are now satisfied--but not yet updated)
 */

const SchellingFunctional = (classes, width, height, similarity, n_iter) => {

	this.populate = () => {
		// random population
	};

	this.isSatisfied = () => {
		// check if you're cool with the neighbors
	};

	this.updateTiles = () => {
		// runs each iteration by calling other methods
	};

	this.move = () => {
		// moves tile
	};

};

const createInitialConditions = (propEmpty, height, width) => {
	return {propEmpty: propEmpty, height: height, width: width};
};

const initConditions = createInitialConditions(0.25, 100, 100);

const types = [
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

const populate = (grid, types, initConditions) => {
	const {prop_empty, height, width} = initConditions;
	const totalTiles = height * width;
	const numAgents = totalTiles * (1 - prop_empty);
	// pre-populate grid
	for (let j = 0; j < width; j++) {
		grid.push([]);
		for (let jj = 0; jj < height; jj++) {
			grid[j].push(0);
		}
	}

	for (let i = 0; i < numAgents; i++) {
		const rrow = Math.floor(Math.random() * height);
		const rcol = Math.floor(Math.random() * width);
		grid[rrow][rcol] = chooseType(types);
	}
	return grid;
}

/**
 * @desc Randomly choose type based on proportions.
 *
 **/
const chooseType = (types) => {
	let proportions = [];
	let result = null;
	let upperProb = 0;
	let lowerProb = 0;
	const rand = Math.random();
	types.forEach((type, i) => {
		lowerProb = upperProb;
		upperProb += type.proportion;
		if (rand >= lowerProb && rand < upperProb) {
			result = type;
		}
	});
	return result;
}

/**
 * @desc We'll choose n number of tiles to move to empty spaces (if they exist).
 * Alternatively we can swap with another unsatisfied grid tile.
 * @param grid The grid made up of various types of houses or persons.
 * @param satisfactionGrid The grid used to determine which positions are satisfied.
 **/
const updateTiles = (n, grid, satisfactionGrid) => {

	const neighborsEmpty = (grid, row, col) => {
		if (oobCheck(row, col) && grid[row][col] === 0) {
			return true;
		}
	}

	const hasEmptyNeighbors = (row, col) => {
		const hasEmpty = checkSurroundingTilesAnd(neighborsEmpty)
		return hasEmpty(row, col) || false;
	}

	const generateTilesToCheck = (n, height, width) => {
		let toCheck = [];
		for (let i = 0; i < n; i++) {
			toCheck.push({
				row: Math.random() * height,
				col: Math.random() * width
			});
		}
		return toCheck;
	};

	const moveToEmpty = (current, empty) => {
		const {cRow, cCol} = current;
		const {eRow, eCol} = empty;

		// do the swippity swap
		grid[eRow][eCol] = grid[cRow][cCol];
		return grid;
	}

	const toCheck = generateTilesToCheck(n, grid.length, grid[0].length);
	const oobCheck = oobCheckGen(grid.length, grid[0].length);

	// iterate through those tiles:
	let updatedGrid = [];
	let updatedTiles = []
	toCheck.forEach((pair) => {
		// (condition check) hasEmptyNeighbors()
		if (hasEmptyNeighbors(pair.row, pair.col) && satisfactionGrid[pair.row][pair.col] === 0) {
			// (condition: true) moveToEmpty()
			updatedGrid = moveToEmpty(pair, empty);
			updatedTiles.push([pair.row, pair.col]);
		} else {
			// (condiiton: false) swap()
			console.log("Swap not implemented");
		}
	});
	return updatedGrid;
}

// const hasEmptyNeighbors = (row, col) => {
//   for (let r = -1; r <= 1; r++) {         // duplicated for loop code consider refactoring
//     for (let c = -1; c <= 1; c++) {
//       if (oobCheck(row + r, col + c) && grid[row + r][col + c] === 0) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// end file
