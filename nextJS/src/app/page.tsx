import styles from "./page.module.css";
import Week from "./_lib/week/week"
import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <Week view={undefined} date={undefined}/>
      </main>
      <Link className={styles.login} href="/login">Login</Link>
      <Link className={styles.signup} href="/signup">Sign Up</Link>
    </>
  );
}