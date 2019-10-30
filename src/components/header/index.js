import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import { EREIO_ICON } from '../../libs/assets';

const Header = () => (
	<header class={style.header}>
		<div class={style.icon_container}>
			<img src={EREIO_ICON} class={style.ereio_icon} alt="ereio" />
		</div>
		<nav>
			<Link activeClassName={style.active} href="/why">me</Link>
			<Link activeClassName={style.active} href="/work">work</Link>
			<Link activeClassName={style.active} href="/blog">blog</Link>
			<Link activeClassName={style.active} href="/contact">contact</Link>
		</nav>
	</header>
);

export default Header;
