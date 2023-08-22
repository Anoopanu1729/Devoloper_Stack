import React from "react";
import LeftSidebar from '../../LeftSidebar/LeftSidebar'
import "./users.css";
import UsersList from "./UsersList";
import { useLocation } from "react-router-dom";

const Users = () => {

const location = useLocation()
console.log(location);

  return (
    <div className="home-container-1">
      <LeftSidebar  />
      <div className="home-container-2" >
        <h1>Users</h1>
       { 
       location.pathname=== '/Users'?
       <UsersList /> : <></>
      }
      </div>
      
    </div>
  );
};

export default Users;