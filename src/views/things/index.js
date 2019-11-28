import { h } from 'preact';
import Marked from 'marked';
import Match, { Link } from 'preact-router/match';
import style from './style.css';

import Header from '../../global/components/header';
import things from '../../static/all-things.json';

// Personal Knowledge Base
// https://alligator.io/css/css-grid-layout-fr-unit/
const Things = () => {

	const topicList = things.map((thingJson) => {
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

	const topicContentList = things.map((thingJson) => {
		const thing = JSON.parse(thingJson);
		const slug = thing.name.toLowerCase().replace(/ /g, '-');
		return (
			<Link class={style.note} activeClassName={style.active} href={`/things/${slug}`}>
				<div class={style.content}>
					<span dangerouslySetInnerHTML={{ __html: Marked(thing.notes) }} />
				</div>
			</Link>
		)
	});

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<Header />
			<main class={style.main}>
				<Match path="/things">
					{({ matches }) => {
						return !matches ? undefined :
							(<h3 style={{ marginBottom: '4vh', gridArea: 'header' }}>
								Welcome to my personal knowlege base
								</h3>);
					}}
				</Match>
				<div style={{ gridArea: 'topics' }}>
					{topicList}
				</div>
				<div style={{ gridArea: 'main' }}>
					{topicContentList}
				</div>
			</main>
		</div>
	)
}

export default Things;
