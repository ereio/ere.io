
import Marked from 'marked'
import Header from 'components/header'
import { useRouter } from 'next/router'

import style from './styles.module.css'

import postsJson from '../../../public/all-posts.json'

const Post = ({ posts }) => {
  const router = useRouter()
  const { post: slug } = router.query
  const postSelected = posts.find((post) => post.title.toLowerCase().replace(/ /g, '-') === slug)

  const { title, body } = postSelected
  return (
    <div className="app">
      <Header />
      <main className="container mx-auto flex flex-col pt-16">
        <section className="flex flex-col items-center">
          <div className="flex flex-col mx-auto items-start max-w-4xl">
            <h1>{title}</h1>
            <span dangerouslySetInnerHTML={{ __html: Marked(body) }} />
          </div>
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

export async function getStaticPaths() {
  const posts = postsJson.map((json) => JSON.parse(json))

  const paths = posts.map((post) => ({
    params: { post: post.title.toLowerCase().replace(/ /g, '-') },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Post
