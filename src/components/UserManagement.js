import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/style.css";
import AddUserDialog from "./AddUserDialog";

function UserManagement() {
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  //  Add user dialog
  const handleOpenAddDialog = () => {
    setOpen(true);
    setSelectedUser(null);
  };

  //   Edit
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   Add
  const handleAddUser = (newUserData) => {
    if (selectedUser) {
      setUsers(
        users.map((user) => (user.id === selectedUser.id ? newUserData : user))
      );
    } else {
      setUsers([...users, newUserData]);
    }

    setOpen(false);
    setAnchorEl(null);
  };

  //   Delete
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setAnchorEl(null);
  };

  //   Handle opening the dropdown
  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  //    Handle closing the dropdown
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="add-container">
        <h2>User Management</h2>
        <button className="add-btn" onClick={handleOpenAddDialog}>
          Add+
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
                    &#x22EE; {/* Ellipsis for menu */}
                  </IconButton>{" "}
                  <Menu
                    anchorEl={anchorEl}
                    open={anchorEl && selectedUser === user}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    <MenuItem onClick={() => handleEditUser(user)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                  {/* <Menu onClick={() => hanleDelete(user.id)}>Delete</Menu> */}
                  {/* <Menu>
                    <MenuItem onClick={() => hanleDeleteUser(user.id)}>
                      Delete
                    </MenuItem>
                  </Menu> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedUser ? "View User Details" : "Add New User"}
        </DialogTitle>
        <DialogContent>
          {selectedUser ? (
            <div>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Role:</strong> {selectedUser.role}
              </p>
              <p>
                <strong>Status:</strong> {selectedUser.status}
              </p>
            </div>
          ) : (
            <div>
              <TextField
                label="Name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Status"
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {selectedUser ? (
            <Button onClick={handleClose}>OK</Button>
          ) : (
            <Button onClick={handleAddUser}>Add User</Button>
          )}
        </DialogActions>
      </Dialog> */}
      <AddUserDialog
        open={open}
        handleClose={handleClose}
        addUser={handleAddUser}
        user={selectedUser}
      />
    </div>
  );
}

export default UserManagement;
