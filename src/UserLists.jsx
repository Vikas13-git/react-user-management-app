import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import API_BASE_URL from "./config/api";

function UsersList() {
    const[users, SetUsers] = useState([]);
    const[loading,setloading] = useState(true);
    const[error,setError] = useState("");
    const[searchTerm , setSearchTerm] = useState("");
    const[sortOrder,setSortOrder] = useState("asc");
    const[refreshCount,setRefreshCount] = useState(0);
    const[selecteduser,setSelectedUser] = useState(null);
    const[deletingUserId,setDeletingUserId] = useState(null);
    const[editingUser,setEditingUser]=useState(null);

    const FilteredUsers = users.filter(user =>
        user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        user.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    const sortedUsers =[...FilteredUsers].sort((userA,userB) => {
if(sortOrder === "asc"){
        return userA.name.localeCompare(userB.name);
}
return userB.name.localeCompare(userA.name);
});
    useEffect(() => {
    const loadUsers = async () => {
        try{
        const response = await fetch(`${API_BASE_URL}/users`);
        if(!response.ok){
            throw new Error("Unable to load users");
        }

        const data = await response.json();
        SetUsers(data);
    }catch(error){
        setError(error.message);
     } finally{
      setloading(false);
    }
};
    loadUsers();
},[refreshCount]);

const handleRefresh =() =>{
    setloading(true);
setError("");


setRefreshCount(previousCount => previousCount + 1);
};

function handleUserAdded(newUser){

    SetUsers(previousUsers =>[...previousUsers,newUser]);
}

function handleUserUpdated(updatedUser){
    SetUsers(previousUsers =>
        previousUsers.map(currentUser =>
            currentUser.id === updatedUser.id ? updatedUser : currentUser
        )
    );
    setEditingUser(null);
}
function handleCancelEdit(){
    setEditingUser(null);
}

function handleEditUser(user){
    setEditingUser(user);
}


const handleViewUser = user =>{
    setSelectedUser(user);
};
const handleCloseDetails =() => {
    setSelectedUser(null);
};

const handleDeleteUser = async userId =>{

    const confirmed = window.confirm(
        "Are you sure you want to delete this user?"
    );
  if(!confirmed){
    return;
  }
  setDeletingUserId(userId);
  setError("");
    try{
    const response = await fetch(
        `${API_BASE_URL}/users/${userId}`,
    {
        method: "DELETE"
    }
);
if(!response.ok){
    throw new Error("Unable to delete user");
}
SetUsers(previousUsers => 
    previousUsers.filter(user => user.id !== userId)
);
if(selecteduser?.id === userId){
    setSelectedUser(null);
    }
} catch(error){
    setError(error.message);
}finally{
    setDeletingUserId(null);
}
};

if (loading){
    return<p role="status">Loading users...</p>
}
if(error){
    return<p role="alert">{error}</p>;
}
return(
    <div className="users-section">
        <h2>Users</h2>
        <div className="users-toolbar">
            <div className="toolbar-field">
                 <label htmlFor="user-search">Search users</label>
            <input className="input"
            id="user-search"
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            />
            </div>
            <div className="toolbar-field">
                 <label htmlFor="user-sort">Sort users</label>
            <select className="sort"
            id="user-sort"
            value={sortOrder}
            onChange={event => setSortOrder(event.target.value)}>
    <option value="asc">Name: A-Z</option>
    <option value="desc">Name: Z-A</option>
</select>
</div>
<button type="button" onClick={handleRefresh}>
                Refresh
            </button>
            </div>
  <AddUserForm onUserAdded={handleUserAdded}/>
    {editingUser && (
        <EditUserForm
     key={editingUser.id}
     user={editingUser}
     onUserUpdated = {handleUserUpdated}
     onCancel ={handleCancelEdit}
     />)}
            {FilteredUsers.length === 0 ? (
                <p>No matching users found.</p>
            ):(
            <ul>
                {sortedUsers.map(user => (
                 <UserCard
                 key={user.id}
                 user={user}
                 onView={handleViewUser}
                 onDelete={handleDeleteUser}
                 isDeleting={deletingUserId === user.id}
                 onEdit={handleEditUser}
                 />
                ))}
            </ul>
            )}
            {selecteduser && (
                <div className="selected-user">
                    <h2> User Details</h2>
                    <p>Name: {selecteduser.name}</p>
                    <p>Email: {selecteduser.email}</p>
                    <p>Phone: {selecteduser.phone}</p>
                    
                    <button type="button" onClick={handleCloseDetails}>
                        Close Details
                        </button>
            </div>
            )}
            
         
        </div>
)}
export default UsersList;
