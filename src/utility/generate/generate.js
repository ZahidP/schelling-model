const createInitialConditions = (propEmpty, height, width) => {
	return {prop_empty: prop_empty, height: height, width: width}
}

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

export const populate = (grid, types, initConditions) => {
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
	console.log(grid);
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
