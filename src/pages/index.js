import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abigail Robinson</title>
        <meta name="description" content="Abby Robinson developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abby Robinson" />
        <meta property="og:description" content="Abby's developer icon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Abigail Robinson</h1>
        <p>Jr Full Stack Developer & Dog Mom</p>
      </main>
    </>
  );
}
