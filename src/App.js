import Board from "./Components/Board";
import styles from "./App.module.css";
function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.neonText}>Lights Out</h1>
      <Board />
    </main>
  );
}

export default App;
