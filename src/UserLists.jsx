import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

function UsersList() {
    const[users, SetUsers] = useState([]);
    const[loading,setloading] = useState(true);
    const[error,setError] = useState("");
    const[searchTerm , setSearchTerm] = useState("");
    const[sortOrder,setSortOrder] = useState("asc");
    const [refreshCount,setRefreshCount] = useState(0);
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
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
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
        `https://jsonplaceholder.typicode.com/users/${userId}`,
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
    return<p>Loading users...</p>
}
if(error){
    return<p>{error}</p>;
}
if(users.length === 0 ){
    return <p>No users found.</p>
}
return(
    <>
    <AddUserForm onUserAdded={handleUserAdded}/>
    {editingUser && (
        <EditUserForm
     key={editingUser.id}
     user={editingUser}
     onUserUpdated = {handleUserUpdated}
     onCancel ={handleCancelEdit}
     />)}
        <div>
            <input className="input"
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            />
            <h2>Users</h2>
               <button onClick={handleRefresh}>
                Refresh
            </button>
            <select className="sort"
            value={sortOrder}
            onChange={event => setSortOrder(event.target.value)}
>
    <option value="asc">Name: A-Z</option>
    <option value="desc">Name: Z-A</option>
</select>
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
                    </div>
            )}
            <button onClick={handleCloseDetails}>Close Details</button>
         
        </div>
        </>
);
}
export default UsersList;
