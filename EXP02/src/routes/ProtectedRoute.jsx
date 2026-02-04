import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <div style={{ textAlign: "center", padding: "2rem" }}>
                <h2>Please Login to access this page</h2>
                <p>Click the Login button in the header to login</p>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
