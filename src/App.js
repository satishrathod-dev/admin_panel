import "./App.css";
// import users from "./user.js";
import users from "./utils/users.js";
import Layout from "./layout/Layout.js";
import { Router, Route, Routes } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover.js";
import Home from "./components/Home.js";
import UserManagement from "./components/UserManagement/UserManagement.js";
import RoleManagement from "./components/RoleManagement/RoleManagement.js";
import { UserContextProvider } from "./context/UserContext.js";
import { RoleContextProvider } from "./context/RoleContext.js";

function App() {
  // function hanleClick() {
  //   try {
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = response.json();
      // console.log("data", data);
    } catch (err) {
      // console.log("Error", err);
    }
  };
  // }
  getData();
  // hanleClick();

  return (
    <div className="App">
      {/* <h1>Hey there!</h1> */}
      {/* <button onClick={getData}>Click me</button> */}
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.city}</p>
            <p>{user.role}</p>
          </li>
        ))}
      </ul> */}
      {/* <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Role</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <UserContextProvider>
        <RoleContextProvider>
          <Layout>
            <Routes>
              {/* <Route path="/" element={<Home />}></Route> */}
              <Route path="/users" element={<UserManagement />}></Route>
              <Route path="/roles" element={<RoleManagement />}></Route>
            </Routes>
          </Layout>
        </RoleContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
