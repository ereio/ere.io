import { h } from 'preact';
import style from './style.css';
import ReactMarkdown from 'react-markdown';

import Omniheader from '../../../components/omni-header';

const Post = ({ title, body, date }) => {
	return (
		<div style={{ flex: 1, zIndex: 5 }}>
			<Omniheader />
			<main class={style.main}>
				<h1>{title}</h1>
				{/* <ReactMarkdown source={body} /> */}
			</main>
		</div>
	)
}
export default Post;
