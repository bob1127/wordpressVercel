import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
     
      <h2 className="text-[32px] border-t-2 font-bold mt-[90px] mb-[30px]">
        Others Posts
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-3 ">
        {posts.map(({ node }) => (
            <span className={'card card-normal m-3 card-body border  border-black'}>
              <PostPreview
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
              />
            </span>
        ))}
      </div>
    </section>
  )
}
