export function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    console.log(`  ${row[0]} | ${row[1]} | ${row[2]} `);

    if (i < board.length - 1) {
      console.log("=============");
    }
  }
}

export function checkIfNoMovesLeft(board) {
  if (!Array.isArray(board) || board.length === 0) {
    return false; 
  }

  for (const row of board) {
    for (const cell of row) {
      if (cell === "_") {
        return false;
      }
    }
  }

  return true;
}
const board = [
  ['X', '_', '_'],
  ['_', 'X', '_'],
  ['O', 'O', 'X']
];

printBoard(board);
console.log("No moves left? ", checkIfNoMovesLeft(board));