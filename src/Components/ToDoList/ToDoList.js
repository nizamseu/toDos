import React from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const ToDoList = (props) => {
  const histrory = useHistory();
  const { name, id, username, email } = props.toDo;
  const handleDetails = () => {
    histrory.push(`/details/${id}`);
  };
  return (
    <tr className="fs-5">
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>@{username.toLowerCase()}</td>
      <td>
        <Button onClick={handleDetails} variant="primary">
          View
        </Button>
      </td>
    </tr>
  );
};

export default ToDoList;
