import React from "react";
import styles from "./Tile.module.css";

function Tile({ row, column, isActive }) {
  const colorStyles = isActive ? styles.on : styles.off;
  return <div className={`${styles.tile} ${colorStyles}`}> </div>;
}

export default Tile;
