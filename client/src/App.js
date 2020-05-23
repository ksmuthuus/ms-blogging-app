import React from "react";
import AddPost from "./AddPost";
import ViewPost from "./ViewPost";

export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <AddPost />
      <hr />
      <h1>Posts</h1>
      <ViewPost />
    </div>
  );
};
