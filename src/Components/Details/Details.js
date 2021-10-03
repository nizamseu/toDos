import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUser from "../../hook/useUser";

const Details = () => {
  const { userId } = useParams();
  const [toDo, setToDo] = useState([]);
  const [user] = useUser();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToDo(data));
  }, []);

  const singleUser = user?.find((item) => item.id == userId);
  const AllToDo = toDo?.filter((item) => item.userId == userId);
  console.log(singleUser, AllToDo);
  return (
    <div>
      <h1>Details is Comming Soon......</h1>
    </div>
  );
};

export default Details;
