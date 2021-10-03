import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Comment from "../Comment/Comment";
const AllPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const postBody = post.find((item) => item.id == postId);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  const fiterComment = comment.filter((item) => item.postId == postId);

  return (
    <div>
      <Box
        className="w-75 mx-auto"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            p: 3,
          },
        }}
      >
        <h4 className="mb-0">Post</h4>
        <Paper elevation={3}>
          <h3>{postBody?.title}</h3>
          <p>{postBody?.body}</p>
        </Paper>
      </Box>
      <Box className="w-50 mx-auto">
        <Paper elevation={3}>
          <h5 className="text-center mt-2 pt-3">All Comments</h5>
          {fiterComment && fiterComment.map((item) => <Comment comments={item}></Comment>)}
        </Paper>
      </Box>
    </div>
  );
};

export default AllPost;
