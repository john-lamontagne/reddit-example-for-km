import axios from 'axios';

const BASE_URL = 'https://www.reddit.com';

export const fetchSubreddits = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/subreddits.json`);
    return response.data.data.children.map(subreddit => subreddit.data.display_name);
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    throw error;
  }
};

export const fetchRedditPosts = async (subreddit) => {
  try {
    const response = await axios.get(`${BASE_URL}/r/${subreddit}/hot.json?limit=6`);
    return response.data.data.children;
  } catch (error) {
    console.error('Error fetching posts from Reddit:', error);
    throw error;
  }
};
