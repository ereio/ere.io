
import Link from 'next/link';

// Components
import Header from 'components/header';

// Styling
import styles from './styles.css';

// Static Data
import thingsJson from '../../../public/all-things.json';

/*
<div>
 <div class={style.search} contenteditable="true">
	Search Topics
</div> 
{/* <input id="collapse-toggle" class={style.toggleInput} type="checkbox" />
<label for="collapse-toggle" class={style.toggle} />

const renderSearch = () => {
	const options = things.map(thing =>
		<Link activeClass={style.activeTopic} href={`/things/${thing.name}`}>
			<div class={style.topic}>
				<h4 style={{ textAlign: 'start' }}>{thing.name}</h4>
			</div>
		</Link>
	)

	return (
		<form action="/things">
			<datalist id="things" style={{ display: 'inherit' }}>
				{options}
			</datalist>
		</form >
	)
}
* /

/**
 * Personal Knowledge Base
 * 
 * https://alligator.io/css/css-grid-layout-fr-unit/
 * https://nextjs.org/docs/basic-features/data-fetching
 */
const Things = ({ things }) => {

	const renderThingList = () => {
		return things.map((thing) => {
			const slug = thing.name.toLowerCase().replace(/ /g, '-');
			return (
				<Link key={thing.name} href={`/things/${slug}`}>
					<a>
						<h4 class={styles.topic}>
							{thing.name}
						</h4>
					</a>
				</Link>
			)
		});
	};

	return (
		<div className="app">
			<Header />
			<main className={styles.main}>
				<input id="collapse-toggle" class={styles.toggleInput} type="checkbox" />
				<label for="collapse-toggle" class={styles.toggle} />
				<div class={styles.topics}>
					{renderThingList()}
				</div>
				<h3 style={{ gridArea: 'main', textAlign: 'left' }}>
					{'Welcome to my personal knowlege base'}
				</h3>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const things = thingsJson.map((json) => JSON.parse(json));
	return {
		props: {
			things,
		},
	}
}
export default Things;
