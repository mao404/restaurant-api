import React, { useEffect, useState } from "react";
import axios from "axios";
import baseApiPath from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = axios.get(baseApiPath + "/users");
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
