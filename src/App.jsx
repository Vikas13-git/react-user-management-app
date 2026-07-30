import "./App.css";
import UsersList from "./UserLists";
import { Routes,Route,Link } from "react-router";
import UserDetails from "./UserDetails";

function App() {
  return (
     <div>
       <title>User Management Application</title>
      <h1 className="app-title">User Management Application</h1>
     <nav className="nav">
      <Link to= "/about">About</Link>|
      <Link to = "/">UserList</Link>
     </nav>
     <Routes>
      <Route path="/" element={<UsersList />} />
     <Route path="/about" element={<h2>About Page</h2>}/>
     <Route path="/users/:id" element={<UserDetails />}/>
     <Route path="*" element={<h2>Page Not Found</h2>}/>
     </Routes>
     </div>
  );
}
export default App;