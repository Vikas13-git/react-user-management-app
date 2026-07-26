function UserCard({user,onView,onDelete,isDeleting,onEdit }){
    return (
<li className="user-card">
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    
    <button onClick={() => onView(user)}>
        View Details
    </button>
    <button onClick={() => onDelete(user.id)}
        disabled ={isDeleting}
        >
    {isDeleting ? "Deleting..." : "Delete"}
    </button>
    <button onClick={() => onEdit(user)}>
        Edit
    </button>
</li>  
);
}
export default UserCard;