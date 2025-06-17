// src/app/page.tsx
import { fetchGraphQL, GET_ALL_POSTS } from '../lib/api';

// This is an Async Server Component in Next.js 13+ App Router
export default async function Home() {
  let posts = [];
  try {
    const data = await fetchGraphQL(GET_ALL_POSTS);
    posts = data?.posts?.nodes || [];
  } catch (error) {
    console.error('Failed to load posts for homepage:', error);
    // You might want to display a user-friendly error message or a fallback UI
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Ascendio Global!</h1>
      <p className="text-xl text-center mb-12">
        Rise Together. Shape Tomorrow. Guiding aspiring entrepreneurs to find their business direction.
      </p>

      <section className="w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6">Latest Insights (from WordPress)</h2>
        {posts.length > 0 ? (
          <div className="grid gap-6">
            {posts.map((post: any) => (
              <article key={post.databaseId} className="border p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className="text-gray-700" />
                <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
              </article>
            ))}
          </div>
        ) : (
          <p>No blog posts found yet. Start creating content in WordPress!</p>
        )}
      </section>
    </main>
  );
}