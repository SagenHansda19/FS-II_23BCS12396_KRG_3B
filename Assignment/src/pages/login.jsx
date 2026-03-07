import { useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    navigate("/");
  }, [setIsAuthenticated, navigate]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>EcoTrack</h2>
          <p style={styles.subtitle}>Monitor your carbon footprint</p>
        </div>

        <div style={styles.cardBody}>
          <p style={styles.label}>Click below to continue</p>
          <button onClick={handleLogin} style={styles.loginBtn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
    width: "360px",
    overflow: "hidden",
  },
  cardHeader: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: "24px 28px",
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
  },
  subtitle: {
    margin: "6px 0 0",
    fontSize: "0.9rem",
    opacity: 0.85,
  },
  cardBody: {
    padding: "28px",
  },
  label: {
    color: "#555",
    marginBottom: "16px",
    fontSize: "0.95rem",
  },
  loginBtn: {
    width: "100%",
    padding: "11px",
    backgroundColor: "#3f51b5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Login;
