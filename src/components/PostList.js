import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postsSlice";
import { Link } from "react-router-dom";
import "./styles/PostList.css";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "failed") return <ErrorMessage message={error} />;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <p>User: {post.userId}</p>
          <h3>Title: {post.title.slice(0, 20)}...</h3>
          <p>Body: {post.body.slice(0, 50)}...</p>
          <Link to={`/item/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
