
import Link from 'next/link';
import Marked from 'marked';
import { useRouter } from 'next/router'

// Components
import Header from 'components/header';

// Styling
import styles from './styles.module.css';

// Static Data
import thingsJson from '../../../public/all-things.json';

const renderThingList = ({ things, selected }) => {
	return things.map((thing) => {
		const slug = thing.name.toLowerCase().replace(/ /g, '-');
		const thingSelected = thing.name === selected;

		return (
			<Link key={slug} href={`/things/${slug}`}>
				<a className={thingSelected ? styles.current : undefined}>
					<h4 class={styles.topic}>
						{thing.name}
					</h4>
				</a>
			</Link>
		)
	});
};

const renderThing = ({ things, selected }) => {
	const thingSelected = things.find((thing) => thing.name === selected)

	return (
		<div class="max-w-md" dangerouslySetInnerHTML={{ __html: Marked(thingSelected.notes) }} />
	)
}

const Things = ({ things }) => {
	const router = useRouter()
	const { thing } = router.query;

	const slug = thing.name.toLowerCase().replace(/ /g, '-');

	return (
		<div className="app">
			<Head>
				<title>{`ereio • things • ${slug}`}</title>
				<meta name="description" content="my personal knowledge base" />
				<meta property="og:title" content="ereio • things" />
				<meta property="og:image" content="/android-chrome-512x512.png" />
			</Head>
			<Header />
			<main class="pt-16 container px-3 mx-auto flex flex-row max-w-4xl">
				<section class="flex flex-col items-start">
					<input id="collapse-toggle" class={styles.toggleInput} type="checkbox" />
					<label for="collapse-toggle" class={styles.toggle} />
					<div class={styles.topics}>
						{renderThingList({ things, selected: thing })}
					</div>
				</section>
				<section class="flex-grow flex-wrap flex-col items-start">
					{renderThing({ things, selected: thing })}
				</section>
			</main>
		</div>
	)
}

const things = thingsJson.map((json) => JSON.parse(json));

export async function getStaticProps() {
	return {
		props: {
			things,
		},
	}
}

export async function getStaticPaths() {
	const paths = things.map((thing) => ({
		params: { thing: thing.name },
	}))

	return {
		paths: paths,
		fallback: false,
	};
}

export default Things;
