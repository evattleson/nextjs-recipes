import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Everett's Dinner Menu page!
        </h1>

        <p className={styles.description}>
          Get started by picking a meal to learn more!{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.heb.com/product-detail/h-e-b-meal-simple-chicken-breast-with-cordon-bleu-stuffing/1878071" className={styles.card}>
            <h2>Chicken Breast with Cordon Bleu Stuffing and Bacon Wrapped Asparagus  &rarr;</h2>
            <p><h5>This mouthwatering roasted stuffed chicken is bursting with flavor! Tender chicken breast is filled with cordon bleu stuffing, creamy Swiss cheese, chopped green onions and delicious sliced ham, topped with fresh parsley flakes. This hearty dish is ready to pop in the oven and eat in 24 minutes!</h5></p>
          </a>

          <a href="https://www.heb.com/product-detail/h-e-b-meal-simple-stuffed-atlantic-salmon-original-with-asparagus/2133207" className={styles.card}>
            <h2>Stuffed Atlantic Salmon Original with Asparagus &rarr;</h2>
            <p><h5>This mouthwatering roasted stuffed salmon is bursting with flavor! Tender Atlantic salmon is filled with seafood stuffing. This hearty dish is ready to pop in the oven and eat in 24 minutes!</h5></p>
          </a>

          <a
            href="https://www.heb.com/product-detail/h-e-b-meal-simple-jumbo-coconut-shrimp-party-tray/2238133"
            className={styles.card}
          >
            <h2>Coconut Shrimp Appetizer &rarr;</h2>
            <p><h5>This dish features fifteen hand breaded coconut shrimp that have been lightly dusted and battered then coated in a blend of coconut and panko breadcrumb blend. Quick clean up and packaged in a convenient oven-ready tray.</h5></p>
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Bedroom"
            className={styles.card}
          >
            <h2>Dessert &rarr;</h2>
            <p><h5>
              Click this link and you'll see.
            </h5></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
