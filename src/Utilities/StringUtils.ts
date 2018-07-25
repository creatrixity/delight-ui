/**
 * Formats a opening time string.
 * 
 * @param {Number} span - Width of a single column.
 * @param {Number} gridSize - Total capacity of columns in the grid.
 * 
 * @returns {String}
 */
export function formatServiceHour (time:string) {
  return time.split(':')[0][1]
}