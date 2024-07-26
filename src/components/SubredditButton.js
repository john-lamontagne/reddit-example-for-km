import React from 'react';

const SubredditButton = ({ subreddit, onClick }) => (
  <button onClick={() => onClick(subreddit)}>{subreddit}</button>
);

export default SubredditButton;
