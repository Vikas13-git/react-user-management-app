import { useContext } from "react";
import UserContext from "./UserContext";
function UserStatus(){
    const{currentUser,handleUpdateUser}=useContext(UserContext);
    return(
        <div className="user-status">
            <p>Name:{currentUser.name}</p>
            <p>Role:{currentUser.role}</p>
            <button onClick={handleUpdateUser}>Update Logged-in User</button>
        </div>
    );
}
export default UserStatus;