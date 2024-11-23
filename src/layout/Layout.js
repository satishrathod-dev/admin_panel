// Layout.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left" style={{ width: 120 }}>
        <List>
          <ListItem button component={Link} to="/users">
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/roles">
            <ListItemText primary="Roles" />
          </ListItem>
          <ListItem button component={Link} to="/permissions">
            <ListItemText primary="Permissions" />
          </ListItem>
        </List>
      </Drawer>

      <div style={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">Admin Dashboard</Typography>
          </Toolbar>
        </AppBar>

        {/* Main content area */}
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
