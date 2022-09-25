import styles from "./GameOverModal.module.css";

export default function GameOverModal({
  setGameOver,
  handleRestartClick,
  moveCount,
}) {
  const handleClick = () => {
    handleRestartClick();
    setGameOver(false);
  };
  return (
    <div data-testid='gameOverModal' className={styles.modal}>
      <h2>Lights out!</h2>
      <p>You turned out the lights in {moveCount} moves.</p>
      <a href='#' onClick={handleClick} className={styles.btn}>
        Click here to play again
      </a>
    </div>
  );
}
