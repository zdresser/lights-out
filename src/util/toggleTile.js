export default function toggleTile(tileColumn, tileRow, state) {
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
}
