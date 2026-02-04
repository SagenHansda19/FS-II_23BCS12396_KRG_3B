import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <div>
            <h1>🌍 EcoTrack</h1>
            <nav>
                <button onClick={() => navigate("/")}>Home</button>
                {isAuthenticated && <button onClick={() => navigate("/dashboard")}>Dashboard</button>}
                {isAuthenticated && <button onClick={() => navigate("/logs")}>Daily Logs</button>}
                {isAuthenticated && <button onClick={handleLogout} style={{ backgroundColor: "#d32f2f" }}>Logout</button>}
            </nav>
            <hr />
        </div>
    );
};

export default Header;
