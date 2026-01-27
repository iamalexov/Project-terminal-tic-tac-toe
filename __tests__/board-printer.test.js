import { checkIfNoMovesLeft, printBoard } from "../board-printer.js";


test("returns false if at least one move is left", () => {
  const board = [
    ["X", "_", "O"],
    ["O", "X", "X"],
    ["O", "X", "O"],
  ];

  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("returns true if no moves are left", () => {
  const board = [
    ["X", "O", "X"],
    ["O", "X", "X"],
    ["O", "X", "O"],
  ];

  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("returns false for an empty board", () => {
  const board = [];

  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("returns false if a row contains _", () => {
  const board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("printBoard outputs the correct board layout", () => {
  const board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"]
  ];

  const lines = [];
  console.log = (msg) => lines.push(msg);

  printBoard(board);

  expect(lines).toEqual([
    "  X | _ | _ ",
    "=============",
    "  _ | X | _ ",
    "=============",
    "  O | O | X "
  ]);
});
