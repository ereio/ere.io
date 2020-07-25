
import Marked from 'marked';
import Header from 'components/header';
import { useRouter } from 'next/router'

import postsJson from '../../../public/all-posts.json';

import style from './style.css';

const Post = ({ posts }) => {

    const router = useRouter()
    const { post: slug } = router.query;
    const postSelected = posts.find((post) => post.title.toLowerCase().replace(/ /g, '-') === slug)

    const { title, body } = postSelected;
    return (
        <div style={{ flex: 1, zIndex: 5 }}>
            <Header />
            <main class={style.main}>
                <h1>{title}</h1>
                <span dangerouslySetInnerHTML={{ __html: Marked(body) }} />
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const posts = postsJson.map((json) => JSON.parse(json));
    return {
        props: {
            posts,
        },
    }
}

export async function getStaticPaths() {
    const posts = postsJson.map((json) => JSON.parse(json));

    const paths = posts.map((post) => ({
        params: { post: post.title.toLowerCase().replace(/ /g, '-') },
    }))

    return {
        paths: paths,
        fallback: false,
    };
}

export default Post;
