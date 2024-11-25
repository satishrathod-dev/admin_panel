import React, { useContext, useState } from "react";
import { RoleContext } from "../../context/RoleContext";
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
  Button,
} from "@mui/material";
import AddRole from "./AddRole";

function RoleManagement() {
  const { roles, addRole, editRole, deleteRole } = useContext(RoleContext);
  console.log(addRole);
  const [selectedRole, setSelectedRole] = useState(null); // State for the selected role
  const [openDialog, setOpenDialog] = useState(false); // State to manage dialog open/close
  const [anchorEl, setAnchorEl] = useState(null); // State for managing the menu anchor element

  // Open the dialog for adding or editing a role
  const handleOpenDialog = (role = null) => {
    setSelectedRole(role); // If editing, set the selected role
    setOpenDialog(true);
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRole(null); // Reset the selected role
  };

  // Save the role (add or edit)
  const handleSaveRole = (roleData) => {
    if (selectedRole) {
      editRole({ ...selectedRole, ...roleData });
    } else {
      addRole(roleData);
    }
    handleCloseDialog();
  };

  // Handle role deletion
  const handleDeleteRole = (roleId) => {
    deleteRole(roleId);
    setAnchorEl(null);
  };

  // Open the dropdown menu for the role actions
  const handleMenuClick = (event, role) => {
    setAnchorEl(event.currentTarget);
    setSelectedRole(role); // Set selected role for editing or deletion
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="add-container">
        <h2>Role Management</h2>
        <button onClick={() => addRole()}>Add Role</button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuClick(e, role)}>
                    &#x22EE; {/* Ellipsis for menu */}
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={anchorEl && selectedRole === role}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    <MenuItem onClick={() => handleOpenDialog(role)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDeleteRole(role.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <AddUserDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        saveRole={handleSaveRole}
        role={selectedRole}
      /> */}
      {/* <AddRoleBtn /> */}
      <AddRole values={roles} />/
      <AddRole
        open={openDialog}
        handleClose={handleCloseDialog}
        saveRole={handleSaveRole}
        role={selectedRole}
      />
    </div>
  );
}

export default RoleManagement;
