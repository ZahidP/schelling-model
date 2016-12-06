export const checkSurroundingTilesAnd = (fn) => (row, col) => {
	for (let r = -1; r <= 1; r++) {
		for (let c = -1; c <= 1; c++) {
			fn(row + r, col + c);
		}
	}
};

export const oobCheckGen = (height, width) => {
	return (row, col) => {
		return ((row) >= 0 && (col) >= 0 && (row) < height && (col) < width);
	};
};
