import NavBar from "@/components/NavBar";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavBar />
      </header>
      
      <main className={styles.main}>
        <h1>Blog AI</h1>
        <h2>Intuitive AI Blogging</h2>
        <button className={styles.getStarted}>Start Blogging</button>
      </main>
    </div>
  );
}
