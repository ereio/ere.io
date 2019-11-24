import { h } from 'preact';
import Marked from 'marked';
import Markup from 'preact-markup';



import style from './style.css';
import Header from '../../../global/components/header';

const Post = () => {

	// Get Post Json Only
	const paths = window.location.href.split('/');
	const slug = paths[paths.length - 1];
	const post = require(`../../../static/posts/${slug}`);

	const { title, body } = post;
	return (
		<div style={{ flex: 1, zIndex: 5 }}>
			<Header />
			<main class={style.main}>
				<h1>{title}</h1>
				{/** TODO: preact-markup is broken and will only be run locally anyway */}
				<span dangerouslySetInnerHTML={{ __html: Marked(body) }} />
			</main>
		</div>
	)
}
export default Post;
