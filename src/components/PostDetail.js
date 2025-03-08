import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === Number(id))
  );

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post-detail">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User Id: {post.userId}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
