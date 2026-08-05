import { useNavigate,useParams } from "react-router";
import useFetch from "./hooks/useFetch";
import API_BASE_URL from "./config/api";
function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const{
        data:user,
        loading,
        error
    }=useFetch(
            `${API_BASE_URL}/users/${id}`

    );

    if (error) {
        return <p className="error-message">{error}</p>;
    }
    if (loading) {
        return <p>Loading user...</p>;
    }
    if(!user){
        return<p>No user data found.</p>
    }
    return (
        <div className="user-details">
            <h2>User Details</h2>

            <p>User ID :{user.id}</p>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
            <button
            type="button"
            onClick={() => navigate("/")}
            >
                Back to Users
            </button>
        </div>
    );
}
export default UserDetails;