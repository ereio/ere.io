import Link from 'next/link'

import assets from 'global/assets';
import style from './styles.css';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins  

const Header = () => (
	<header class={style.header}>
		<nav class={style.nav}>
			<Link activeClassName={style.activeLink} href="/">
				<a>me</a>
			</Link>
			<Link activeClassName={style.activeLink} href="/things">
				<a>things</a>
			</Link>
			<Link href="/me" class={style.icon}>
				<a>
					<img src={assets.ereioIcon} style={{ height: 45, width: 45, marginLeft: 8, textAlign: 'center' }} />
				</a>
			</Link>
			<Link activeClassName={style.activeLink} href="/blog">
				<a>blog</a>
			</Link>
			<a href="https://github.com/ereio" native="true">github</a>
		</nav>
	</header>
);

export default Header;
