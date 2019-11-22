import { h } from 'preact';
import style from './style.css';

import Omniheader from '../../components/omni-header';

const Blog = () => (
	<div style={{ flex: 1, zIndex: 5 }}>
		<Omniheader />
	</div>
);

export default Blog;
