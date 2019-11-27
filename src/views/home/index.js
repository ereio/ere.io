import { h } from 'preact';
import style from './style.css';

import IntroHeader from './intro-header';

const Main = () => (
	<div style={{
		flex: 1,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<IntroHeader />
		<p style={{ zIndex: 5, fontSize: 9 }}>Photo By Peter Tarka</p>
		<div id='background' />
	</div>
);

export default Main;
