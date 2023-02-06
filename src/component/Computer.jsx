import React, { useEffect, useState } from "react";
import ComputerSquare from "./ComputerSquare";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Computer = () => {
  const borderRowClass =
    "board-row board-row flex  justify-evenly items-center";

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    const playerWon = linesThatAre("x", "x", "x").length > 0;
    const computerWon = linesThatAre("o", "o", "o").length > 0;
    if (playerWon) {
      setWinner("x");
    }
    if (computerWon) {
      setWinner("o");
    }
    const putComputerAt = (index) => {
      let newSquares = squares;
      newSquares[index] = "o";
      setSquares([...newSquares]);
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre("o", "o", null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre("x", "x", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("o", null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [squares]);

  function handleClicked(index) {
    if (squares[index] !== null) {
      return;
    }
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = "x";
      setSquares([...newSquares]);
    }
  }

  const newGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <>
      <div className="main w-96">
        <div className="flex justify-between">
          <button
            onClick={newGame}
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            newGame
          </button>
          {!!winner && winner === "x" && (
            <div className="result green">You WON!</div>
          )}
          {!!winner && winner === "o" && (
            <div className="result red">You LOST!</div>
          )}
        </div>
        <div className="border-2 border-white border-solid border-container">
          <div className={borderRowClass}>
            <ComputerSquare
              x={squares[0] === "x" ? 1 : 0}
              o={squares[0] === "o" ? 1 : 0}
              onClick={() => handleClicked(0)}
            />
            <ComputerSquare
              x={squares[1] === "x" ? 1 : 0}
              o={squares[1] === "o" ? 1 : 0}
              onClick={() => handleClicked(1)}
            />
            <ComputerSquare
              x={squares[2] === "x" ? 1 : 0}
              o={squares[2] === "o" ? 1 : 0}
              onClick={() => handleClicked(2)}
            />
          </div>
          <div className={borderRowClass}>
            <ComputerSquare
              x={squares[3] === "x" ? 1 : 0}
              o={squares[3] === "o" ? 1 : 0}
              onClick={() => handleClicked(3)}
            />
            <ComputerSquare
              x={squares[4] === "x" ? 1 : 0}
              o={squares[4] === "o" ? 1 : 0}
              onClick={() => handleClicked(4)}
            />
            <ComputerSquare
              x={squares[5] === "x" ? 1 : 0}
              o={squares[5] === "o" ? 1 : 0}
              onClick={() => handleClicked(5)}
            />
          </div>
          <div className={borderRowClass}>
            <ComputerSquare
              x={squares[6] === "x" ? 1 : 0}
              o={squares[6] === "o" ? 1 : 0}
              onClick={() => handleClicked(6)}
            />
            <ComputerSquare
              x={squares[7] === "x" ? 1 : 0}
              o={squares[7] === "o" ? 1 : 0}
              onClick={() => handleClicked(7)}
            />
            <ComputerSquare
              x={squares[8] === "x" ? 1 : 0}
              o={squares[8] === "o" ? 1 : 0}
              onClick={() => handleClicked(8)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Computer;
