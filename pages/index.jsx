import Link from "next/link";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <h6 className={styles.welcome}>Hey there, geeks! I am</h6>
        <h1 className={styles.title}>Saulo Castillos</h1>
        <h3 className={styles.subtitle}>&lt;!-- Software Enginner --&gt;</h3>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.contained}>What Can I Do?</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>React Out to Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}

