import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins  

const Omniheader = () => (
	<header class={style.header}>
		<nav class={style.nav}>
			<Link activeClassName={style.activeLink} href="/">me</Link>
			<Link activeClassName={style.activeLink} href="/blog">blog</Link>
			<a href="https://github.com/ereio" native>github</a>
		</nav>
	</header>
);

export default Omniheader;
