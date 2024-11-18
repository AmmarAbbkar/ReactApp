import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
   // State variables for moves and turn
   const [moves, setMoves] = useState(new Array(9).fill(""));
   const [turn, setTurn] = useState("X");

   function gridClick(whichSquare) {
      if (moves[whichSquare] === "") {
         const movesCopy = [...moves]; // Create a copy of the moves array
         movesCopy[whichSquare] = turn; // Set the current square to the player's turn
         setMoves(movesCopy); // Update moves state

         // Alternate turn between "X" and "O"
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // Step 1: Declare newGame() function
   function newGame() {
      setMoves(new Array(9).fill("")); // Reset all squares to empty
      setTurn("X"); // Reset the turn to "X"
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            {/* Step 2: Update New Game button to call newGame() */}
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;
