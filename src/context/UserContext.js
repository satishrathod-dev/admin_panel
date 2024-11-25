import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Satish Rathod",
      email: "satish@gmail.com",
      userId: "satish@gmail.com",
      role: "Admin",
      Status: "Active",
    },
    {
      id: "2",
      name: "Mit Rathod",
      email: "mit@gmail.com",
      userId: "mit@gmail.com",
      role: "User",
      Status: "Active",
    },
  ]);

  // Add a new user
  const addUser = (userData) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...userData, id: prevUsers.length + 1 },
    ]);
  };

  // Edit a user
  const editUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Delete a user
  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};
