import { BlogPosts } from 'app/components/posts'
import ThreeCanvas from './components/ThreeCanvas'


export default function Page() {

  return (
    <section>
      <ThreeCanvas />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I like making dumb things.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>

    </section>
  )
}
