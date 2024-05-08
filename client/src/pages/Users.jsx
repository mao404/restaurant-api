import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = axios.get("/users");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  return <div>Users</div>;
};

export default Users;
