const transpose = function(matrix) {
  
  let array = [];

  for (let j = 0; j < matrix[0].length; j++) {
    array.push([]);
  }
 

  for (let row = 0; row < matrix.length; row++) {
    
    for (let column = 0; column < matrix[row].length; column++) {

      array[column][row] = matrix[row][column];

    }
    
  }
  return array;
};


// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};



module.exports = { transpose };