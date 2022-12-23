import Head from 'next/head'

// Components
import styles from './styles.module.css'

import Hero from '../components/hero'
 
// Styles
 
function Main() {
  return (
    <div className={styles.app}>
      <Head>
        <title>ereio</title>
        <meta name="description" content="a person and a blog" />
        <meta property="og:title" content="ereio" />
        <meta property="og:image" content="/icons/android-chrome-512x512.png" />
      </Head>
      <Hero />
      <div className={styles.background} />
      <p style={{ zIndex: 100, fontSize: 9 }}>Photo By Peter Tarka</p>
    </div>
  )
}

export default Main
