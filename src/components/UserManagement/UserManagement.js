// User management
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import AddUserDialog from "../AddUserDialog"; // Assuming you have this component for adding/editing users
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import "../../styles/style.css";
function UserManagement() {
  const { users, addUser, editUser, deleteUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for managing the menu anchor element

  const handleOpenDialog = (user = null) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleSaveUser = (userData) => {
    if (selectedUser) {
      editUser({ ...selectedUser, ...userData });
    } else {
      addUser(userData);
    }
    handleCloseDialog();
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
    setAnchorEl(null); // Close the menu when a user is deleted
  };

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="add-container">
        <h2>User Management</h2>
        <button className="add-btn" onClick={() => handleOpenDialog()}>
          Add User
        </button>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuClick(e, user)}>
                    ...
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={anchorEl && selectedUser === user}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => handleOpenDialog(user)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddUserDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        addUser={handleSaveUser}
        user={selectedUser}
      />
    </div>
  );
}

export default UserManagement;
