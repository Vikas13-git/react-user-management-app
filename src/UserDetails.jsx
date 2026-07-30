import { useParams } from "react-router";
import { useState, useEffect } from "react";
function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            setError("");
            setUser(null);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`

                );

                if (!response.ok) {
                    throw new Error("User Not Found");
                }
                const data = await response.json();
                setUser(data)
            }
            catch (error) {
                setError(error.message)
            }
        };
        loadUser();
    }, [id]);
    if (error) {
        return <p className="error-message">{error}</p>;
    }
    if (!user) {
        return <p>Loading user...</p>;
    }
    return (
        <div className="user-details">
            <h2>User Details</h2>

            <p>User ID :{user.id}</p>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
        </div>
    );
}
export default UserDetails;