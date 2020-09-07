import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>контент</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  )
}
