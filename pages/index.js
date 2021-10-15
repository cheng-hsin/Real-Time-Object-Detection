import App from '../components/App';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LTech即時影像辨識</title>
      </Head>
      <App></App>
      <footer className={styles.footer}>2021 Powered by LTech</footer>
    </>
  );
}
