import Link from 'next/link'
import Head from 'next/head'

// Components
import Header from 'components/header'

// Styling
import styles from './styles.module.css'

// Static Data
import thingsJson from '../../../public/all-things.json'

/**
 * Personal Knowledge Base
 *
 * https://alligator.io/css/css-grid-layout-fr-unit/
 * https://nextjs.org/docs/basic-features/data-fetching
 * https://stackoverflow.com/questions/49025403/max-width-with-css-grid
 */
const renderThingList = ({ things }) => things.map((thing) => {
  const slug = thing.name.toLowerCase().replace(/ /g, '-')
  return (
    <Link key={thing.name} href={`/things/${slug}`}>
      <a className={styles.topicContainer}>
        <h4 className={styles.topic}>
          {thing.name}
        </h4>
      </a>
    </Link>
  )
})

const Things = ({ things }) => (
  <div className="app">
    <Head>
      <title>ereio • things</title>
      <meta name="description" content="my personal knowledge base" />
      <meta property="og:title" content="ereio • things" />
      <meta property="og:image" content="/android-chrome-512x512.png" />
    </Head>
    <Header />
    <main className="pt-16 container px-3 mx-auto flex flex-row max-w-4xl">
      <section className="flex flex-col items-start">
        <input id="collapse-toggle" className={styles.toggleInput} type="checkbox" />
        <label htmlFor="collapse-toggle" className={styles.toggle} />
        <div className={styles.topics}>
          {renderThingList({ things })}
        </div>
      </section>
      <section className="flex-grow flex-wrap flex-col items-start">
        <h1>
          Welcome to my personal knowledge base
        </h1>
      </section>
    </main>
  </div>
)

export async function getStaticProps() {
  const things = thingsJson.map((json) => JSON.parse(json))
  return {
    props: {
      things,
    },
  }
}
export default Things
