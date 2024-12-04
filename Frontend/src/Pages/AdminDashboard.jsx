import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { isAuthenticated, role, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/login" />
  }

  return(
     <>
     <div>Welcome to Admin Dashboard</div>;
     <h1>{user.name}</h1>
     </>
  
  )
};

export default AdminDashboard;
