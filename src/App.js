import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import RedditPosts from './components/RedditPosts';

function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);

  const handleSubredditClick = (subreddit) => {
    setSelectedSubreddit(subreddit);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar onSubredditClick={handleSubredditClick} />
        <main>
          {selectedSubreddit ? (
            <RedditPosts subreddit={selectedSubreddit} />
          ) : (
            <div>Select a subreddit to view posts</div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
