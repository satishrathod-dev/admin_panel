import React, { createContext, useContext, useState } from "react";

const UserActionContext = createContext();

export const useuserActions = () => {
  return useContext(UserActionContext);
};

export const userActions = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "Z8n5t@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "satish",
      email: "satish@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ]);
};
