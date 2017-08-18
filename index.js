/**
 * Returns a promise that resolves after the given time to the given value.
 * @param {number} time - Number of milliseconds .
 * @param {*} [value] - Resolve value.
 * @returns {Promise.<*>}
 */
function xTime(time, value) {
  return new Promise(resolve => setTimeout(resolve, time, value))
}

module.exports = xTime
