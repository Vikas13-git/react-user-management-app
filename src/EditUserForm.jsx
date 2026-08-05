import { useState } from "react";
import API_BASE_URL from "./config/api";
function EditUserForm({user,onUserUpdated,onCancel}){
const[name,setName] = useState(user.name);
const[email,setEmail] = useState(user.email);
const[phone,setPhone] = useState(user.phone);
const[editError,setEditError] = useState("");
const[savingchanges,setSavingChanges]=useState(false);


const handleSubmit = async (event) => {
    event.preventDefault();
if(!name.trim() || !email.trim() || !phone.trim()){
    setEditError("Name, email, and phone are required.");
return;
}
    setEditError("");
    setSavingChanges(true);

    try{    
const response = await fetch (`${API_BASE_URL}/users/${user.id}`,{

    method:"PATCH",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,phone})
});
if(!response.ok){
    throw new Error("Failed to edit user");
}
const updatedUser = await response.json();
   onUserUpdated(updatedUser);
}
catch(error){
        setEditError(error.message);
    }
    finally{
        setSavingChanges(false);
    }
}

return(
  <form className="edit-user-form" onSubmit={handleSubmit}>  
<h2>Edit User</h2>
<div className="form-controls">
    <div className="form-field">
<label htmlFor="edit-user-name">Name</label>
<input
id="edit-user-name"
type="text"
value={name}
onChange={event => setName(event.target.value)}
/>
</div>
<div className="form-field">
<label htmlFor="edit-user-email">Email</label>
<input
id="edit-user-email"
type="email"
value={email}
onChange={event => setEmail(event.target.value)}
/>
</div>
<div className="form-field">
<label htmlFor="edit-user-phone">Phone</label>
<input
id="edit-user-phone"
type="tel"
value={phone}
onChange={event => setPhone(event.target.value)}
/>
</div>
</div>

{editError && (<p className="error-message" role="alert"
>{editError}
</p>
)}
<div className="form-actions">
<button type="submit" disabled={savingchanges}>{savingchanges ? "Saving.." :"Save Changes"}</button>
<button type="button" onClick={onCancel} 
disabled={savingchanges}
>
    Cancel
</button>
</div>
</form>
);
}
export default EditUserForm;