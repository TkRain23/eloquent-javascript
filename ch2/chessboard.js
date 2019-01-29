/*
Write a program that creates a string that represents an 8×8 grid
Use newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.

Example:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

const size = 8;
let board = '';

for (let i = 0; i < size; i += 1) {
  for (let j = 0; j < size; j += 1) {
    if ((i + j) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board)
