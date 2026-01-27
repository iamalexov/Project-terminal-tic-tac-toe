export function printBoard(board) {
    console.log('');
    for (let i = 0; i < board.length; i++) {
        console.log(
            `  ${board[i][0]} | ${board[i][1]} | ${board[i][2]} `
        );
        if (i < board.length - 1) {
            console.log('=============');
        }
    }
    console.log('');
}

export function checkIfNoMovesLeft(board) {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '_') {
                return false;
            }
        }
    }
    return true;
}
