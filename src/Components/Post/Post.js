import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const Post = () => {
  const { userId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const AllPost = post.filter((item) => item.userId == userId);
  const handlePost = (id) => {
    console.log(id);
    history.push(`/comment/${id}`);
  };
  return (
    <div>
      <h1 className=" m-4  text-center ">All Post </h1>
      <div className="w-50 mx-auto">
        <Table striped bordered hover>
          <thead className="bg-danger text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {AllPost &&
              AllPost.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <Button onClick={() => handlePost(item.id)} variant="primary">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Post;
