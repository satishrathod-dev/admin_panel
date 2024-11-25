// // Context.js
// import React, { createContext, useContext, useState } from "react";

// // Create a context for managing users and roles
// const ManagementContext = createContext();

// export const useManagementContext = () => {
//   return useContext(ManagementContext);
// };

// export const ManagementProvider = ({ children }) => {
//   // State for users
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@example.com",
//       userId: "john@example.com",
//       role: "Admin",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane@example.com",
//       userId: "jane@example.com",
//       role: "User",
//       status: "Inactive",
//     },
//   ]);

//   // State for roles
//   const [roles, setRoles] = useState([
//     { id: 1, name: "Admin" },
//     { id: 2, name: "User" },
//     { id: 3, name: "Moderator" },
//   ]);

//   // Add a new user
//   const addUser = (userData) => {
//     setUsers((prevUsers) => [
//       ...prevUsers,
//       { ...userData, id: prevUsers.length + 1 },
//     ]);
//   };

//   // Edit an existing user
//   const editUser = (updatedUser) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
//     );
//   };

//   // Delete a user
//   const deleteUser = (userId) => {
//     setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
//   };

//   // Add a new role
//   const addRole = (roleData) => {
//     setRoles((prevRoles) => [
//       ...prevRoles,
//       { ...roleData, id: prevRoles.length + 1 },
//     ]);
//   };

//   // Edit an existing role
//   const editRole = (updatedRole) => {
//     setRoles((prevRoles) =>
//       prevRoles.map((role) => (role.id === updatedRole.id ? updatedRole : role))
//     );
//   };

//   // Delete a role
//   const deleteRole = (roleId) => {
//     setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleId));
//   };

//   return (
//     <ManagementContext.Provider
//       value={{
//         users,
//         roles,
//         addUser,
//         editUser,
//         deleteUser,
//         addRole,
//         editRole,
//         deleteRole,
//       }}
//     >
//       {children}
//     </ManagementContext.Provider>
//   );
// };
