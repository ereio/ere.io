import { h } from 'preact';
import Marked from 'marked';
import Match, { Link } from 'preact-router/match';
import style from './style.css';

import Header from '../../global/components/header';
import things from '../../static/all-things.json';
import '../../static/prism.css';


// Personal Knowledge Base
// https://alligator.io/css/css-grid-layout-fr-unit/
const Things = () => {
	const paths = window.location.href.split('/');
	const slug = paths[paths.length - 1];

	const thing = things.reduce((found, thingJson) => {
		const thing = JSON.parse(thingJson);
		return thing.name === slug ? thing : found;
	}, {});

	const thingList = things.map((thingJson) => {
		const thing = JSON.parse(thingJson);
		const slug = thing.name.toLowerCase().replace(/ /g, '-');
		return (
			<Link activeClass={style.activeTopic} href={`/things/${slug}`}>
				<div class={style.topic}>
					<h4 style={{ textAlign: 'start' }}>{thing.name}</h4>
				</div>
			</Link>
		)
	});

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<Header />
			<main class={style.main}>
				<div style={{ gridArea: 'topics' }}>
					{thingList}
				</div>
				<Match path="/things">
					{({ matches }) => {
						return matches ?
							<h3 style={{ gridArea: 'main' }}>
								Welcome to my personal knowlege base
							</h3> :
							<div style={{ gridArea: 'main' }}>
								<div class={style.content}>
									<span dangerouslySetInnerHTML={{ __html: Marked(thing.notes) }} />
								</div>
							</div>
					}}
				</Match>
			</main>
		</div>
	)
}

export default Things;
