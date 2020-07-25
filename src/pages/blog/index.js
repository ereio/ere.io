
import Link from 'next/link';

import Header from 'components/header';

import postsJson from '../../../public/all-posts.json';

import style from './style.css';

const Headline = ({ post }) => {
    const { title, date, body } = post;
    const slug = title.toLowerCase().replace(/ /g, '-');
    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <div style={{ flex: 1, marginBottom: '8vh' }}>
                    <h2 style={{ marginBottom: 8 }}>{title}</h2>
                    <h4>{new Date(date).toDateString()}</h4>
                    <p>{`${body.slice(0, 120)}...`}</p>
                </div>
            </a>
        </Link>
    );
};

const Blog = ({ posts }) => {
    const headlines = posts.map((post) => (
        <Headline post={post} />
    ));
    return (
        <div style={{ flex: 1 }}>
            <Header />
            <main class={style.main}>
                <h1 style={{ marginBottom: '4vh' }}></h1>
                {headlines}
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

export default Blog;
