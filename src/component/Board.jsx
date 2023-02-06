import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const borderRowClass =
    "board-row board-row flex  justify-evenly items-center";
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const handleClicked = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "x" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const playAgainButtonClicked = () => {
    setState(Array(9).fill(null));
  };

  const isWinner = checkWinner();

  // if (!isWinner) {
  //   setState(Array(9).fill(null));
  // }

  const newGame = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div className="main w-96">
        {" "}
        {isWinner ? (
          <div className="flex flex-col justify-center space-y-4 items-centerlkjhgfdxz">
            {" "}
            <div className="text-4xl "> {isWinner} jeet gaya </div>
            <div>
              <button
                onClick={playAgainButtonClicked}
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Play Again
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                newGame
              </button>{" "}
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              <div className="mb-2 text-xl">
                Player {isXTurn ? "X" : "0"} please move
              </div>
              <button
                onClick={newGame}
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                newGame
              </button>
            </div>

            <div className="border-2 border-white border-solid border-container">
              <div className={borderRowClass}>
                <Square onClick={() => handleClicked(0)} value={state[0]} />
                <Square onClick={() => handleClicked(1)} value={state[1]} />
                <Square onClick={() => handleClicked(2)} value={state[2]} />
              </div>
              <div className={borderRowClass}>
                <Square onClick={() => handleClicked(3)} value={state[3]} />
                <Square onClick={() => handleClicked(4)} value={state[4]} />
                <Square onClick={() => handleClicked(5)} value={state[5]} />
              </div>
              <div className={borderRowClass}>
                <Square onClick={() => handleClicked(6)} value={state[6]} />
                <Square onClick={() => handleClicked(7)} value={state[7]} />
                <Square onClick={() => handleClicked(8)} value={state[8]} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Board;
