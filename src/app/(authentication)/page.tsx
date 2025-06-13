'use client'
import NavBar from "@/components/NavBar";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    return router.push('/signup');
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavBar />
      </header>
      
      <main className={styles.main}>
        <h1>Blog AI</h1>
        <h2>Intuitive AI Blogging</h2>
        <button onClick={handleClick} className={styles.getStarted}>Start Blogging</button>
      </main>
    </div>
  );
}
