import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins  

const Omniheader = () => (
	<header class={style.header}>
		<nav class={style.navi}>
			<Link activeClassName={style.clicked} href="/">me</Link>
			<Link activeClassName={style.clicked} href="/blog">blog</Link>
			<Link activeClassName={style.testing} href="/github">github</Link>
			{/* <Link activeClassName={style.testing} href="/work">work</Link> */}
			{/* <Link activeClassName={style.testing} href="/contact">contact</Link> */}
		</nav>
	</header>
);

export default Omniheader;
