import React from "react";
import Tile from "./Tile";
import styles from "./Board.module.css";
function Board() {
  return (
    <div className={styles.board}>
      {[...Array(5)].map((tile, col) => (
        <div>
          {[...Array(5)].map((tile, row) => (
            <Tile column={col} row={row} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
{
  /* {[...Array(5)].map((tile, j) => {
        return <Tile column={} row={i} />;
      })} */
}
