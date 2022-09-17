import { useState } from "react";
import Tile from "./Tile";
import styles from "./Board.module.css";
import shortid from "shortid";
export default function Board() {
  const [boardState, setBoardState] = useState([
    // { column: 4, row: 1 },
    // { column: 0, row: 3 },
  ]);

  const handleTileClick = async (column, row) => {
    console.log(`You clicked column ${column}, row ${row}`);
    //toggle clicked tile
    let newState = [...boardState];

    newState = toggleTile(column, row, newState);

    //toggle neighbors
    debugger;
    if (column + 1 < 5) {
      newState = toggleTile(column + 1, row, newState);
      console.log("1");
    }
    if (column - 1 > -1) {
      newState = toggleTile(column - 1, row, newState);
      console.log("2");
    }
    if (row + 1 < 5) {
      newState = toggleTile(column, row + 1, newState);
      console.log("3");
    }
    if (row - 1 > -1) {
      newState = toggleTile(column, row - 1, newState);
      console.log("4");
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

    // if (currentTile) {
    //   const tileIndex = boardState.findIndex(
    //     (item) =>
    //       item.column === currentTile.column && item.row === currentTile.row
    //   );

    //   setBoardState([
    //     ...boardState.slice(0, tileIndex),
    //     ...boardState.slice(tileIndex + 1),
    //   ]);
    // } else {
    //   //if not in state, add to state
    //   setBoardState([...boardState, { column: tileColumn, row: tileRow }]);
    // }
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
