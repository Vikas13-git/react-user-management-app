import { useState } from "react";

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
const response = await fetch (`https://jsonplaceholder.typicode.com/users/${user.id}`,{

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
  <form onSubmit={handleSubmit}>  
<input
value={name}
onChange={event => setName(event.target.value)}
/>

<input
value={email}
onChange={event => setEmail(event.target.value)}
/>

<input
value={phone}
onChange={event => setPhone(event.target.value)}
/>

<button type="submit" disabled={savingchanges}>{savingchanges ? "Saving.." :"Save Changes"}</button>
{editError && <p className="error-message">{editError}</p>}
<button type="button" onClick={onCancel} 
disabled={savingchanges}
>
    Cancel
</button>
</form>
);
}
export default EditUserForm;