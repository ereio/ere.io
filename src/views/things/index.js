import { h } from 'preact';
import Marked from 'marked';
import Match, { Link } from 'preact-router/match';
import style from './style.css';

import Header from '../../global/components/header';

const topics = [
	{
		name: 'dart',
		notes: '## Notes on dart',
		slug: 'dart'
	},
	{
		name: 'openwrt',
		notes: '## Notes on openwrt',
		slug: 'openwrt'
	},
	{
		name: 'css',
		notes: '## Notes on css',
		slug: 'css'
	},
	{
		name: 'jsless',
		notes: '## Building without JS',
		slug: 'jsless'
	},
]
// Personal Knowledge Base
// https://alligator.io/css/css-grid-layout-fr-unit/
const Things = () => {
	const topicList = topics.map((topic) => (
		<Link activeClass={style.activeTopic} href={`/things/${topic.slug}`}>
			<div class={style.topic}>
				<h4 style={{ textAlign: 'start' }}>{topic.name}</h4>
			</div>
		</Link>
	));

	const topicContentList = topics.map((topic) => (
		<Link class={style.note} activeClassName={style.active} href={`/things/${topic.slug}`}>
			<div class={style.content}>
				<span dangerouslySetInnerHTML={{ __html: Marked(topic.notes) }} />
			</div>
		</Link>
	));
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<Header />
			<main class={style.main}>
				<Match path="/things">
					{({ matches, path, route }) => {
						return !matches ? undefined : (
							<h3 style={{ marginBottom: '4vh', gridArea: 'header' }}>
								Welcome to my personal knowlege base
								</h3>
						);
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
