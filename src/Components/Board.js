import { useState, useEffect } from "react";
import Tile from "./Tile";
import styles from "./Board.module.css";
import shortid from "shortid";
import toggleTile from "../util/toggleTile";
import getRandomBoardState from "../util/getRandomBoardState";
import GameOverModal from "./GameOverModal";

export default function Board() {
  const initialState = getRandomBoardState();
  const [boardState, setBoardState] = useState(initialState);
  const [moveCount, setMoveCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleTileClick = async (column, row) => {
    //increment move count
    setMoveCount((prev) => prev + 1);
    //toggle clicked tile
    let newState = [...boardState];
    newState = toggleTile(column, row, newState);

    //toggle neighbors

    if (column + 1 < 5) {
      newState = toggleTile(column + 1, row, newState);
    }
    if (column - 1 > -1) {
      newState = toggleTile(column - 1, row, newState);
    }
    if (row + 1 < 5) {
      newState = toggleTile(column, row + 1, newState);
    }
    if (row - 1 > -1) {
      newState = toggleTile(column, row - 1, newState);
    }

    setBoardState(newState);
    if (boardState.length === 0) setGameOver(true);
  };

  const handleRestartClick = () => {
    setMoveCount(0);
    const newState = getRandomBoardState();
    setBoardState(newState);
  };

  return (
    <>
      {gameOver && <GameOverModal />}
      <div className={styles.board}>
        <h3 className={styles.count}>Move Count: {moveCount}</h3>
        <div className={styles.tiles}>
          {[...Array(5)].map((tile, col) => (
            <div key={col}>
              {[...Array(5)].map((tile, row) => {
                return (
                  <Tile
                    column={col}
                    row={row}
                    key={shortid.generate()}
                    boardState={boardState}
                    handleTileClick={handleTileClick}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <a href='#' onClick={handleRestartClick} className={styles.restart}>
          Restart
        </a>
      </div>
    </>
  );
}
