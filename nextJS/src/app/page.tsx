import Image from "next/image";
import styles from "./page.module.css";
import next from "next";
import Week from "./_lib/week/week"
import Month from "./_lib/month/month"

export default function Home() {
  return (
    <main className={styles.main}>
      <Week/>
    </main>
  );
}