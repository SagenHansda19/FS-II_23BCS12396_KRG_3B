import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/dashboard");
    };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2>Welcome to EcoTrack</h2>
            <p>Please login to continue and track your carbon footprint</p>
            <button onClick={handleLogin} style={{ padding: "10px 30px", fontSize: "18px" }}>
                Login
            </button>
        </div>
    );
};

export default Login;
