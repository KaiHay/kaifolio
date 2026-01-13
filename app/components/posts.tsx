import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="relative min-h-[600px] overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>

      {/* Blog posts as floating cards */}
      <div className="relative z-10">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post, index) => (
            <Link
              key={post.slug}
              className="floating-post-card"
              href={`/blog/${post.slug}`}
              style={{
                '--delay': `${index * 0.5}s`,
                '--float-offset': `${(index % 3) * 20}px`,
              } as React.CSSProperties}
            >
              <div className="post-content">
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
