import { useState } from "react";
import Tile from "./Tile";
import styles from "./Board.module.css";
import shortid from "shortid";
export default function Board() {
  const [boardState, setBoardState] = useState([
    { column: 4, row: 1 },
    { column: 0, row: 3 },
  ]);

  const handleTileClick = (column, row) => {
    console.log(`You clicked column ${column}, row ${row}`);
    const currentTile = boardState.find(
      (item) => item.column === column && item.row === row
    );

    //toggle clicked tile
    if (currentTile) {
      const tileIndex = boardState.findIndex(
        (item) =>
          item.column === currentTile.column && item.row === currentTile.row
      );

      setBoardState([
        ...boardState.slice(0, tileIndex),
        ...boardState.slice(tileIndex + 1, boardState.length),
      ]);
    } else {
      //if not in state, add to state
      setBoardState([...boardState, { column, row }]);
    }

    //toggle neighbors
  };
  return (
    <div className={styles.board}>
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
  );
}
