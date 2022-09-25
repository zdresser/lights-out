export default function toggleTile(tileColumn, tileRow, state) {
  //check to see if tile is in state and find index for later step
  const currentTile = state.findIndex(
    (item) => item.column === tileColumn && item.row === tileRow
  );

  //if tile's in the state, remove it
  if (currentTile >= 0) {
    return [...state.slice(0, currentTile), ...state.slice(currentTile + 1)];
  } else {
    //if not in state, add to state
    return [...state, { column: tileColumn, row: tileRow }];
  }
}
