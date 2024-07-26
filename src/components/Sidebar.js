import React, { useEffect, useState } from 'react';
import { fetchSubreddits } from '../api/redditApi';
import SubredditButton from './SubredditButton';

const Sidebar = ({ onSubredditClick }) => {
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    const getSubreddits = async () => {
      try {
        const subreddits = await fetchSubreddits();
        setSubreddits(subreddits.slice(0, 5)); // This is where we can set the amount of subreddits to load, by slicing the data
      } catch (error) {
        console.error('Error fetching subreddits:', error);
      }
    };

    getSubreddits();
  }, []);

  return (
    <aside>
      {subreddits.map(subreddit => (
        <SubredditButton
          key={subreddit}
          subreddit={subreddit}
          onClick={onSubredditClick}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
