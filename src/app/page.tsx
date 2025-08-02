// src/app/page.tsx
import { fetchGraphQL, GET_ALL_POSTS } from '../lib/api'; // Keep your existing API import

// Import your new homepage section components
import HeroSection from '../components/HeroSection';
import ProblemSolvedSection from '../components/ProblemSolvedSection';
import CoreSolutionSection from '../components/CoreSolutionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCtaSection from '../components/FinalCtaSection';

// This is an Async Server Component in Next.js 13+ App Router
export default async function Home() {
  // Keep your existing WordPress data fetching logic if you still want to display posts later
  // For now, we'll place the "Latest Insights" section further down or move it to a blog page.
  let posts = [];
  try {
    const data: any = await fetchGraphQL(GET_ALL_POSTS);
    console.log('Fetched data from WordPress:', data);
    posts = data?.posts?.nodes || [];
  } catch (error) {
    console.error('Failed to load posts for homepage:', error);
    // You might want to display a user-friendly error message or a fallback UI
  }
// Until here it's the part of the WordPress posts which I have deleted

  return (
    <> 
    <main> {/* Use <main> tag as the container */}
      {/* Render each of your homepage sections here in order */}
      <HeroSection />
      <ProblemSolvedSection />
      <CoreSolutionSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
    </>
  );
}