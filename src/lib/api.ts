// src/lib/api.ts
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';

if (!API_URL) {
  throw new Error(
    'Missing NEXT_PUBLIC_WORDPRESS_API_URL environment variable'
  );
}

export async function fetchGraphQL(query: string, { variables = {} } = {}) {
  const client = new GraphQLClient(API_URL);

  try {
    return await client.request(query, variables);
  } catch (error: any) {
    console.error('Error fetching GraphQL:', error.message);
    // Log the full error response for debugging, especially network errors or GraphQL errors
    if (error.response) {
      console.error('GraphQL Response Errors:', error.response.errors);
      console.error('GraphQL Response Data:', error.response.data);
    }
    throw new Error(`Failed to fetch GraphQL data: ${error.message}`);
  }
}

// Example of a simple query (you'll replace this with your actual queries)
export const GET_ALL_POSTS = gql`
  query AllPosts {
    posts(first: 100) { # Fetch up to 100 posts
      nodes {
        databaseId
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;