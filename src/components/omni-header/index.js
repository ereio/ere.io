import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins  

const Omniheader = () => (
	<header class={style.header}>
		<nav style={{ padding: 50 }}>
			<Link activeClassName={style.clicked} href="/">me</Link>
			<Link activeClassName={style.clicked} href="/blog">blog</Link>
			<Link activeClassName={style.clicked} href="/github">github</Link>
		</nav>
	</header>
);

export default Omniheader;
