import { useState } from "react";
import Tile from "./Tile";
import styles from "./Board.module.css";
import shortid from "shortid";
export default function Board() {
  const [boardState, setBoardState] = useState([
    // { column: 4, row: 1 },
    // { column: 0, row: 3 },
  ]);
  const [moveCount, setMoveCount] = useState(0);

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
  };

  const toggleTile = (tileColumn, tileRow, state) => {
    const currentTile = state.find(
      (item) => item.column === tileColumn && item.row === tileRow
    );
    if (currentTile) {
      const tileIndex = state.findIndex(
        (item) =>
          item.column === currentTile.column && item.row === currentTile.row
      );

      return [...state.slice(0, tileIndex), ...state.slice(tileIndex + 1)];
    } else {
      //if not in state, add to state
      return [...state, { column: tileColumn, row: tileRow }];
    }
  };
  const handleRestartClick = () => {};
  return (
    <>
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
