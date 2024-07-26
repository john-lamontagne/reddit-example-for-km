import React, { useEffect, useState } from 'react';
import { fetchRedditPosts } from '../api/redditApi';

const RedditPosts = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      if (!subreddit) return;

      try {
        setLoading(true);
        const posts = await fetchRedditPosts(subreddit);
        setPosts(posts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [subreddit]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts from {subreddit}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.data.id}>
            <h3>{post.data.title}</h3>
            <p>{post.data.selftext}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditPosts;
