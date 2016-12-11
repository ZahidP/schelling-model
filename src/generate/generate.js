const createInitialConditions = (propEmpty, height, width) => {
	return {propEmpty: propEmpty, height: height, width: width};
};

// const initConditions = createInitialConditions(0.25, 100, 100);


const populate = (grid, types, initConditions) => {
	const {propEmpty, height, width} = initConditions;
	const totalTiles = height * width;
	const numAgents = totalTiles * (1 - propEmpty);
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
};

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
};


export const createGrid = (propEmpty, height, width, types) => {
	const initialConditions = createInitialConditions(propEmpty, height, width);
	const grid = populate([], types, initialConditions);
	return grid;
};
