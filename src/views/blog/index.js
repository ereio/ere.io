import { h } from 'preact';
import style from './style.css';

import Header from '../../components/header';

const Blog = () => (
	<div style={{ flex: 1, zIndex: 5 }}>
		<Header />
	</div>
);

export default Blog;
