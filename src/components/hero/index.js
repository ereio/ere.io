import Link from 'next/link'

import styles from './styles.css';

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react/54521330
// https://github.com/pmcalmeida/preact-cli-svg-loader
// https://github.com/preactjs/preact-cli/wiki/Plugins  

const Header = () => (
	<header class={styles.header}>
		<div class={styles.hover_container}>
			<div class={styles.bottom_hover} />
			<div class={styles.top_hover} />
			<div class={styles.left_hover} />
			<div class={styles.stem_hover} />

			<div class={styles.icons}>
				<div class={styles.top} />
				<div class={styles.left} />
				<div class={styles.dot} />
				<div class={styles.stem} />
				<div class={styles.bottom} />
				<div class={styles.spout} />
			</div>
		</div>
		<nav class={styles.navi}>
			<Link href="/">me</Link>
			<Link href="/things">things</Link>
			<Link href="/blog">blog</Link>
			<a href="https://github.com/ereio" native>github</a>
		</nav>
	</header>
);

export default Header;
