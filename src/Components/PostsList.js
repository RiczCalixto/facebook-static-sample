import React from "react";

const PostsList = ({ state }) => {
  return (
    <ul>
      {state.posts.map(post => (
        <li key={post.id}>
          <img src={post.author.avatar} />
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
