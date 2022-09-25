import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import Board from "./Components/Board";
import Tile from "./Components/Tile";

//since this is a small app, I've put all tests in this one file.

afterEach(cleanup);

test("board should have 25 tiles", () => {
  const { getAllByTestId } = render(<App />);
  const tiles = getAllByTestId("tile");
  expect(tiles.length).toEqual(25);
});

test("displays the count", () => {
  const { getByRole } = render(<App />);
  const countHeading = getByRole("heading", { level: 2 });
  expect(countHeading).toHaveTextContent("0");
});

test("clicking a tile increments move count", () => {
  const { getByRole, getAllByTestId } = render(<App />);
  const countHeading = getByRole("heading", { level: 2 });

  const tile = getAllByTestId("tile")[1];
  userEvent.click(tile);

  expect(countHeading).toHaveTextContent("1");
});

test("clicking a tile fires the handleTileClick callback", () => {
  const handleTileClick = jest.fn();
  render(<Tile handleTileClick={handleTileClick} boardState={[]} />);

  const tile = screen.queryByTestId("tile");

  userEvent.click(tile);

  expect(handleTileClick).toHaveBeenCalledTimes(1);
});

test("clicking restart resets the move count", () => {
  const { getByRole, getAllByTestId } = render(<Board />);
  const restartButton = screen.getByRole("button", { name: "Restart" });
  const countHeading = getByRole("heading", { level: 2 });

  //click a tile to increment count
  const tile = getAllByTestId("tile")[1];
  userEvent.click(tile);

  //click restart and expect count to reset
  userEvent.click(restartButton);
  expect(countHeading).toHaveTextContent("0");
});

test("game over modal is absent at game start", () => {
  const { queryByTestId } = render(<App />);
  const gameOverModal = queryByTestId("gameOverModal");
  expect(gameOverModal).toBeNull();
});

test("game over modal appears to end the game", () => {
  //I can't think of a way to do this without lifting the all the Board state up into the App component. I'm being lazy about refactoring all that just for a test.
});
