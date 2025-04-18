import React, { useEffect, useState } from "react";
import List from "../list/List";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setPosts(json.slice(0, 5)))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="p-4">
      <p className="text-xl font-bold mb-2">Posts</p>
      <List 
        items={posts} 
        className="bg-white rounded-lg shadow p-2"
      />
    </div>
  );
};
