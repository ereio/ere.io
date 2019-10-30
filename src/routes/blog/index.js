import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>

		<img src={EREIO_ICON} className="ereio-icon-augmented" alt="ereio" />
		<p>This is the Home component.</p>
	</div>
);

export default Home;
