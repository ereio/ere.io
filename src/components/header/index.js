import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins  

const Header = () => (
	<header class={style.header}>
		<div class={style.hover_container}>
			<div class={style.bottom_hover} />
			<div class={style.top_hover} />
			<div class={style.left_hover} />
			<div class={style.stem_hover} />

			<div class={style.icons}>
				<div class={style.top} />
				<div class={style.left} />
				<div class={style.dot} />
				<div class={style.stem} />
				<div class={style.bottom} />
				<div class={style.spout} />
			</div>
		</div>
		<nav class={style.navi}>
			<Link activeClassName={style.testing} href="/me">me</Link>
			<Link activeClassName={style.clicked} href="/blog">blog</Link>
			<a href="https://github.com/ereio" native>github</a>
			{/* <Link activeClassName={style.testing} href="/work">work</Link> */}
			{/* <Link activeClassName={style.testing} href="/contact">contact</Link> */}
		</nav>
	</header>
);

export default Header;
