
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
    if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      i % 2 === 0 ? matrix[i] : matrix[i].reverse();
    };
    matrix.map(a => a.map(b => arr.push(b)));
    return arr;
    }
    return [];
}
