
import Link from 'next/link'
import Header from 'components/header'

import style from './styles.module.css'

import postsJson from '../../../public/all-posts.json'

const Headline = ({ post }) => {
  const { title, date, body } = post
  const slug = title.toLowerCase().replace(/ /g, '-')
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
  )
}

const Blog = ({ posts }) => {
  const headlines = posts.map((post) => (
    <Headline post={post} />
  ))
  return (
    <div className="app">
      <Header />
      <main className="container mx-auto flex flex-col pt-16">
        <section className="px-8 flex flex-col items-center">
          {headlines}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = postsJson.map((json) => JSON.parse(json))
  return {
    props: {
      posts,
    },
  }
}

export default Blog
