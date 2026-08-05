import { useState } from "react"
import API_BASE_URL from "./config/api";
function AddUserForm({onUserAdded}){

    const[name,setName]=useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone]=useState("");
    const[formError,setFormError] = useState("");
    const[successmessage,setSuccessMessage]=useState("");
const[isSubmitting,setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
    event.preventDefault();

    if(!name.trim() || !email.trim() || !phone.trim()){
    setFormError("Name,email,and phone are required.");
    return;
}
setFormError("");
setIsSubmitting(true);
try{    
const response = await fetch (`${API_BASE_URL}/users`,{

    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,phone})
});
if(!response.ok){
    throw new Error("Failed to add user");
}
const newUser = await response.json();
   onUserAdded(newUser);

setName("");
setEmail("");
setPhone("");
setSuccessMessage("User added successfully!");

setTimeout(() =>{
setSuccessMessage("");
},3000);
}
catch(error){
        setFormError(error.message);
    }
    finally{
        setIsSubmitting(false);
    }
}
    return(
        <form onSubmit={handleSubmit}>
            <h2>Add New User</h2>
<div className="form-controls">
    <div className="form-field">
            <label htmlFor="user-name">Name</label>
           

            <input className="input"
            id="user-name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={event => setName(event.target.value)}
            />
</div>
            <div className="form-field">
            <label htmlFor="user-email">Email</label>

            <input className="input"
            id="user-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
</div>
<div className="form-field">

            <label htmlFor="user-phone">Phone</label>
            <input className="input"
            id="user-phone"
            type="tel"
            placeholder="Enter phone"
            value={phone}
            onChange={event => setPhone(event.target.value)}
            />
            </div>

    <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add User"}</button>
</div>
        {formError && (<p className="error-message" role="alert">
            {formError}
            </p>
        )}
        {successmessage && (<p className="success-message" role="status">
            {successmessage}
            </p>
        )}
        </form>
    )
}
export default AddUserForm;