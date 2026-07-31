import "./App.css";
import UsersList from "./UserLists";
import { Routes,Route,NavLink } from "react-router";
import UserDetails from "./UserDetails";
import UserContext from "./UserContext";
import { useState } from "react";
import UserStatus from "./UserStatus";

function App() {

const [currentUser,setCurrentUser] = useState({
  name:"Vikas",
  role:"Developer"
});

function handleUpdateUser(){
  setCurrentUser({
    name:"Vikas Kolla",
    role:"Full Stack Developer"
  }
);
}
  return (
     <UserContext value={{currentUser,
      handleUpdateUser
     }}>
     <div className="app-container">
       <title>User Management Application</title>
      <h1 className="app-title">User Management Application</h1>
     <nav className="nav">
      <NavLink to= "/about"
      className={({ isActive }) =>
      isActive ?"active-link" : ""
      }
      >
        About
        </NavLink>|
      <NavLink to = "/"
      end
      className={({isActive}) => 
      isActive ? "active-link":""
      }
      >
        Users
        </NavLink>
     </nav>
     <UserStatus />
     <Routes>
      <Route path="/" element={<UsersList />} />
     <Route path="/about" element={<h2>About Page</h2>}/>
     <Route path="/users/:id" element={<UserDetails />}/>
     <Route path="*" element={<h2>Page Not Found</h2>}/>
     </Routes>
     
     </div>

  </UserContext>
  );

}
export default App;