import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ToDoList from "../ToDoList/ToDoList";
import "../../App.css";
import useUser from "../../hook/useUser";
const ToDos = () => {
  const [user] = useUser();
  //   const [user, setUser] = useState([]);
  //   useEffect(() => {
  //     const url = `https://jsonplaceholder.typicode.com/users`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);

  return (
    <div className="mt-5">
      <Table striped bordered responsive hover>
        <thead>
          <tr className="text-center bg-danger text-white">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <ToDoList toDo={item}></ToDoList>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ToDos;
