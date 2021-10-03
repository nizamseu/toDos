import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useUser from "../../hook/useUser";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Table } from "react-bootstrap";
const Details = () => {
  const history = useHistory();
  const { userId } = useParams();
  const [toDo, setToDo] = useState([]);
  const [user] = useUser();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToDo(data));
  }, []);

  const singleUser = user?.find((item) => item?.id == userId);

  const AllToDo = toDo?.filter((item) => item.userId == userId);
  console.log(singleUser, AllToDo);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {singleUser?.company?.name}
          </Typography>
          <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
            {singleUser?.company?.bs}
          </Typography>
          <Typography variant="h1" className="text-danger" component="div">
            {singleUser?.name}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {singleUser?.website}
          </Typography>
          <Typography variant="h6" component="div">
            From <span className="text-secondary">{singleUser?.address?.city}</span>
          </Typography>
          <Typography variant="h6">@{singleUser?.username}</Typography>
          <Typography variant="h6">
            <Button className="m-2" variant="contained" color="error" onClick={() => history.goBack()}>
              Back
            </Button>
            <Button variant="contained" color="error" onClick={() => history.push("/")}>
              Home
            </Button>
          </Typography>
        </CardContent>
      </div>
      <div className="w-75 mx-auto">
        <h1 className="text-center my-2">
          All To Do Of <span className="text-success">{singleUser?.name}</span>
        </h1>
        <Table striped bordered hover>
          <thead className="bg-danger text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>User ID</th>
              <th>isComplete</th>
            </tr>
          </thead>
          <tbody>
            {AllToDo &&
              AllToDo.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.userId}</td>
                  <td>
                    {item.completed ? (
                      <span className="text-success">Yes</span>
                    ) : (
                      <span className="text-danger">No</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Details;
