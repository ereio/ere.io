import Link from 'next/link'

import assets from 'global/assets';
import style from './styles.css';

const Header = () => (
	<header class={style.header}>
		<nav class={style.nav}>
			<Link href="/">
				<a>me</a>
			</Link>
			<Link href="/things">
				<a>things</a>
			</Link>
			<Link href="/me" class={style.icon}>
				<a>
					<img src={assets.ereioIcon} style={{ height: 45, width: 45, marginLeft: 8, textAlign: 'center' }} />
				</a>
			</Link>
			<Link href="/blog">
				<a>blog</a>
			</Link>
			<a href="https://github.com/ereio" native="true">github</a>
		</nav>
	</header>
);

export default Header;
