import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>{user.username}</p> {/* Display user data */}
        </div>
    );
}

export default UserDashboard;
