import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import Header from '../../global/components/header';
import posts from '../../static/all-posts.json';

const Headline = ({ post }) => {
	const { title, date, body } = post;
	const slug = title.toLowerCase().replace(/ /g, '-');
	return (
		<Link activeClassName={style.activeLink} href={`/blog/${slug}`}>
			<div style={{ flex: 1, marginBottom: '8vh' }}>
				<h2 style={{ marginBottom: 8 }}>{title}</h2>
				<h4>{new Date(date).toDateString()}</h4>
				<p>{`${body.slice(0, 120)}...`}</p>
			</div>
		</Link>
	);
};

const Blog = () => {
	const headlines = posts.map((post) => (
		<Headline post={JSON.parse(post)} />
	));
	return (
		<div style={{ flex: 1 }}>
			<Header />
			<main class={style.main}>
				<h1 style={{ marginBottom: '4vh' }}></h1>
				{headlines}
			</main>
		</div>
	)
}

export default Blog;
