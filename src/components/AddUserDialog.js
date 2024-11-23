// src/components/AddUserDialog.js
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const AddUserDialog = ({ open, handleClose, addUser, user }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  //   set initial form values if editing a user
  useEffect(() => {
    if (user) {
      setNewUser({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    }
  }, [user]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle Add User
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role || !newUser.status) {
      alert("Please fill in all details");
      return;
    }

    const userToSave = {
      ...newUser,
      id: user ? user.id : Date.now(),
    };
    addUser(userToSave);

    setNewUser({
      name: "",
      email: "",
      role: "",
      status: "",
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{user ? "Edit user" : "Add New User"}</DialogTitle>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleAddUser}>
          {user ? "Save changes" : "Add User"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;
