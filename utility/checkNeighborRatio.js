/**
 * @desc Check if the neighbor ratio is sufficient.
 *
 **/
export const checkNeighborRatio = (i, j, dimensions) => {
  const {height, width} = dimensions;
  const current = grid[i][j];
  let same = 0;
  let diff = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if ((i + x) >= 0 &&
          (j + y) >= 0 &&
          (i + x) < height &&
          (j + y) < width) {
            current.name === grid[i + x][j + y].name ? same += 1 : diff += 1;
      }
    }
  }
  const currentRatio = (same - 1)/8;
  const ratio = current.thresh;
  return currentRatio >= ratio;
}
