import Link from 'next/link';
import Head from 'next/head';
import Marked from 'marked';
import { useRouter } from 'next/router';

// Components
import Header from 'components/header';

// Styling
import styles from './styles.module.css';

// Static Data
import thingsJson from '../../../public/all-things.json';

const renderThingList = ({ things, selected }) => things.map((thing) => {
  const slug = thing.name.toLowerCase().replace(/ /g, '-');
  const thingSelected = thing.name === selected;

  return (
    <Link key={thing.name} href={`/things/${slug}`}>
      <a className={styles.topicContainer}>
        <h4 className={thingSelected ? styles.topicActive : styles.topic}>
          {thing.name}
        </h4>
      </a>
    </Link>
  );
});

const renderThing = ({ things, selected }) => {
  const thingSelected = things.find((thing) => thing.name === selected);

  return (
    <div className="max-w-md" dangerouslySetInnerHTML={{ __html: Marked(thingSelected.notes) }} />
  );
};

const Things = ({ things }) => {
  const router = useRouter();
  const { thing } = router.query;

  const slug = thing.toLowerCase().replace(/ /g, '-');

  return (
    <div className="app">
      <Head>
        <title>{`ereio • things • ${slug}`}</title>
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
            {renderThingList({ things, selected: thing })}
          </div>
        </section>
        <section className="flex-grow flex-wrap flex-col items-start">
          {renderThing({ things, selected: thing })}
        </section>
      </main>
    </div>
  );
};

const things = thingsJson.map((json) => JSON.parse(json));

export async function getStaticProps() {
  return {
    props: {
      things,
    },
  };
}

export async function getStaticPaths() {
  const paths = things.map((thing) => ({
    params: { thing: thing.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Things;
