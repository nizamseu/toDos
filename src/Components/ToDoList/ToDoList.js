import React from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const ToDoList = (props) => {
  const histrory = useHistory();
  const { name, id, username, email } = props.toDo;
  const handleToDo = () => {
    histrory.push(`/details/${id}`);
  };
  const handlePost = () => {
    histrory.push(`/post/${id}`);
  };
  return (
    <tr className="fs-5">
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>@{username.toLowerCase()}</td>
      <td>
        <Button onClick={handleToDo} variant="primary">
          View
        </Button>
      </td>
      <td>
        <Button onClick={handlePost} variant="primary">
          View
        </Button>
      </td>
    </tr>
  );
};

export default ToDoList;
