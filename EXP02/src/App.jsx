import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Logs from "./pages/Logs";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./App.css"

function App() {
    return (
        <>
            <Header />
            <main style={{ padding: "1rem" }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/logs"
                        element={
                            <ProtectedRoute>
                                <Logs />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </main>
        </>
    )
}

export default App;
