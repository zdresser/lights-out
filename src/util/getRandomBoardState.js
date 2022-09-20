export default function getRandomBoardState() {
  //generate random number of lights between 1 and 25
  const numLights = Math.floor(Math.random() * 25) + 1;
  const randomBoard = [];

  const buildBoard = (column, row) => {
    const exists = randomBoard.some(
      (light) => light.column === column && light.row === row
    );

    if (exists) {
      const newColumn = Math.floor(Math.random() * 5);
      const newRow = Math.floor(Math.random() * 5);
      buildBoard(newColumn, newRow);
      return;
    }
    randomBoard.push({ column, row });
  };

  for (let i = 0; i < numLights; i++) {
    const newColumn = Math.floor(Math.random() * 5);
    const newRow = Math.floor(Math.random() * 5);
    buildBoard(newColumn, newRow);
  }

  return randomBoard;
}
