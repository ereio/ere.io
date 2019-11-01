import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import { BOTTOM, TOP_LEFT, SPOUT, STEM, DOT } from '../../libs/assets';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins 
const Ereio = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="360px" height="400px" viewBox="0 0 160 200" version="1.1">
		<title>ereio</title>
		<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g id="ereio_v3" transform="translate(-458.000000, -144.000000)" fill={props.fill}>
				<path d="M496.999,305.075 L579.999,305.075 L580,192 L618,192 L618,343.25 L580,343.25 L579.999,343.075 L477.925,343.075 L477.924,343 L459,343 L458.999,182.074 L458.925,182.075 L458.925,144.075 L531.999,144.074 L532,144 L570,144 L570,256 L532,256 L531.999,182.074 L496.999,182.074 L496.999,305.075 Z M618,144 L618,182 L580,182 L580,144 L618,144 Z" id="ereio"></path>
			</g>
		</g>
	</svg>
)

const Header = () => (
	<header class={style.header}>
		<div class={style.hover_container}>
			{/* Could be used to be consistant with hot quadrants */}
			{/* <div class={style.top_hover} />
			<div class={style.stem_hover} />
			<div class={style.spout_hover} /> */}
			<div class={style.bottom_hover} />
			<div class={style.top_hover} />
			<div class={style.left_hover} />
			<div class={style.icons}>
				<img src={DOT} class={style.dot} />
				<img src={STEM} class={style.stem} />
				<img src={BOTTOM} class={style.bottom} />
				<img src={TOP_LEFT} class={style.topleft} />
				<img src={SPOUT} class={style.spout} />
			</div>
		</div>
		<nav class={style.navi}>
			<Link activeClassName={style.clicked} href="/under">under construction</Link>
			{/* <Link activeClassName={style.testing} href="/why">me</Link>
			<Link activeClassName={style.testing} href="/work">work</Link>
			<Link activeClassName={style.testing} href="/blog">blog</Link>
			<Link activeClassName={style.testing} href="/contact">contact</Link> */}
		</nav>
	</header>
);

export default Header;
