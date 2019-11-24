import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';

import Header from '../../global/components/header';

const posts = [
	{
		title: 'Testing an Article Title',
		date: '06 June, 2019',
		body: "# This is a header\n\nAnd this is a paragraphr",
		slug: "testing-an-article-title-1"
	}, {
		title: 'Testing an Article Title',
		date: '06 June, 2019',
		body: "An Code example with PrismJS Gatsby-Starter-Julia uses the Atom Editor Theme. Default NodeJS server",
		slug: "testing-an-article-title-2"
	}, {
		title: 'Testing an Article Title',
		date: '06 June, 2019',
		body: "An Code example with PrismJS Gatsby-Starter-Julia uses the Atom Editor Theme. Default NodeJS server",
		slug: "testing-an-article-title-3"
	}, {
		title: 'Testing an Article Title',
		date: '06 June, 2019',
		body: "An Code example with PrismJS Gatsby-Starter-Julia uses the Atom Editor Theme. Default NodeJS server",
		slug: "testing-an-article-title-4"
	}, {
		title: 'Testing an Article Title',
		date: '06 June, 2019',
		body: "An Code example with PrismJS Gatsby-Starter-Julia uses the Atom Editor Theme. Default NodeJS server",
		slug: "testing-an-article-title-5"
	}, {
		title: 'Testing an Article Title',
		date: '06 June, 2019',
		body: "An Code example with PrismJS Gatsby-Starter-Julia uses the Atom Editor Theme. Default NodeJS server",
		slug: "testing-an-article-title-5"
	},
]

const Headline = ({ post }) => {
	const { title, date, body, slug } = post;
	return (
		<Link activeClassName={style.activeLink} href={"/blog/" + slug}>
			<div style={{ flex: 1, marginTop: '8vh', marginBottom: '8vh' }}>
				<h2 style={{ marginBottom: 8 }}>{title}</h2>
				<h4>{date}</h4>
				<p>{`${body.slice(0, 120)}...`}</p>
			</div>
		</Link>
	);
};

const Blog = () => {
	const headlines = posts.map((post) => (
		<Headline post={post}
		/>
	));
	return (
		<div style={{ flex: 1 }}>
			<Header />
			<main class={style.main}>
				{headlines}
			</main>
		</div>
	)
}

export default Blog;
