import { useEffect, useState } from "react";
import styles from "./Tile.module.css";

export default function Tile({ column, row, boardState, handleTileClick }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(
      boardState.find((item) => item.row === row && item.column === column)
    );
  }, [boardState]);

  const colorStyles = isActive ? styles.on : styles.off;
  return (
    <div
      className={`${styles.tile} ${colorStyles}`}
      onClick={() => handleTileClick(column, row)}>
      {" "}
    </div>
  );
}
