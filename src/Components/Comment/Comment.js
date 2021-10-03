import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Comment = (props) => {
  const { name, email, body, id } = props.comments;
  return (
    <div>
      <Box className="m-1 p-2">
        <h5>{email}</h5>
        <p className="m-3 mt-0 mb-0 text-secondary">{body}</p>
      </Box>
    </div>
  );
};

export default Comment;
