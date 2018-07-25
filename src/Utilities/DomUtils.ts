/**
 * Calculates the width of a column in a row.
 * 
 * @param {Number} span - Width of a single column.
 * @param {Number} gridSize - Total capacity of columns in the grid.
 * 
 * @returns {String}
 */
export function computeColumnWidth (span:number, gridSize = 12) {
  const width:number = (span / gridSize) * 100;

  return `width: ${width}%`
}