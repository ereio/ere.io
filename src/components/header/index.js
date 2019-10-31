import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import { EREIO_ICON } from '../../libs/assets';

const Header = () => (
	<header class={style.header}>
		<div class={style.iconContainer}>
			<img src={EREIO_ICON} class={style.ereioIcon} alt="ereio" />
		</div>
		<nav class={style.navi}>
			<Link activeClassName={style.testing} href="/why">me</Link>
			<Link activeClassName={style.testing} href="/work">work</Link>
			<Link activeClassName={style.testing} href="/blog">blog</Link>
			<Link activeClassName={style.testing} href="/contact">contact</Link>
		</nav>
	</header>
);

export default Header;
