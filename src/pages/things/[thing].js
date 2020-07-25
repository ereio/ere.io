
import Link from 'next/link';
import Marked from 'marked';
import { useRouter } from 'next/router'

// Components
import Header from 'components/header';

// Styling
import styles from './styles.css';

// Static Data
import thingsJson from '../../../public/all-things.json';

const renderThingList = ({ things, selected }) => {
	return things.map((thing) => {
		const slug = thing.name.toLowerCase().replace(/ /g, '-');
		const thingSelected = thing.name === selected;

		return (
			<Link href={`/things/${slug}`}>
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
		<div style={{ gridArea: 'main' }}>
			<div class={styles.content}>
				<span dangerouslySetInnerHTML={{ __html: Marked(thingSelected.notes) }} />
			</div>
		</div>
	)
}

const Things = ({ things }) => {
	const router = useRouter()
	const { thing } = router.query;

	return (
		<div className="app">
			<Header />
			<main className={styles.main}>
				<input id="collapse-toggle" class={styles.toggleInput} type="checkbox" />
				<label for="collapse-toggle" class={styles.toggle} />
				<div class={styles.topics}>
					{renderThingList({ things, selected: thing })}
				</div>
				<div>
					{renderThing({ things, selected: thing })}
				</div>
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
