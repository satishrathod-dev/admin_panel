import React, { useState, createContext } from "react";
// import RoleManagement from "../components/RoleManagement";

export const RoleContext = createContext();

// export default RoleContext;

export const RoleContextProvider = ({ children }) => {
  // State for roles
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
    { id: 3, name: "Moderator" },
  ]);

  // Add a new role
  const addRole = (roleData) => {
    console.log(roleData);
    setRoles((prevRoles) => [
      ...prevRoles,
      { ...roleData, id: prevRoles.length + 1 },
    ]);
  };

  // Delete a role
  const deleteRole = (roleId) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleId));
  };

  return (
    <RoleContext.Provider value={{ roles, addRole, deleteRole }}>
      {children}
      {/* <RoleManagement /> */}
    </RoleContext.Provider>
  );
};
