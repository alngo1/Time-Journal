import styles from "./page.module.css";
import Week from "./_lib/week/week"

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <Week view={undefined} date={undefined}/>
      </main>
    </>
  );
}