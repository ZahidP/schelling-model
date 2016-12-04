/**
 * @desc Check if the neighbor ratio is sufficient.
 *
 **/
export const checkNeighborRatio = (i, j, dimensions) => {
  const {height, width} = dimensions;
  const current = grid[i, j];
  const getAllNeighbors = checkSurroundingTilesAnd(getNeighbors);
  const allNeighbors = getAllNeighbors(i, j);
  const totalSame = allNeighbors.filter((tile) => {
    return tile.name === grid[i][j].name
  }).length;
  if ((totalSame - 1)/8 >= current.thresh) {
    return true
  } else {
    return false;
  }
}

export const getNeighbors = (row, col, grid) => {
  return grid[row][col].name;
}





// end file
