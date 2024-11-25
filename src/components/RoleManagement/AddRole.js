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

const AddRole = ({ open, handleClose, addUser, roles }) => {
  const [newRole, setNewRole] = useState({
    roleName: "",
    permissions: "",
  });

  //   set initial form values if editing a user
  useEffect(() => {
    if (roles) {
      setNewRole({
        roleName: roles.roleName,
      });
    }
  }, [roles]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prevRole) => ({
      ...prevRole,
      [name]: value,
    }));
  };

  // Handle Add User
  const handleAddUser = () => {
    if (!newRole.roleName) {
      alert("Please fill in all details");
      return;
    }

    const userToSave = {
      ...newRole,
      id: roles ? roles.id : Date.now(),
    };
    addUser(userToSave);

    setNewRole({
      roleName: "",
    });
    //   handleClose();
    //   };

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{roles ? "Edit role" : "Add New Role"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newRole.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newRole.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleAddUser}>
            {roles ? "Save changes" : "Add User"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
};

export default AddRole;
