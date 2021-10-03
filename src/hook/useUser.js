import { useEffect, useState } from "react";
const useUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return [user];
};
export default useUser;
