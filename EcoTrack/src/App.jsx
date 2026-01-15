import "./App.css"
import Header from "./components/Header"
import Dashboard from "./pages/dashboard"
import Logs from "./pages/Logs"

const App = () => {
    return (
        <>
            <Header title="Ecotrack - experiment 1" />
            <main style={{ padding: "1rem" }}>
                <Dashboard />
                <Logs />
            </main>
        </>
    )
}

export default App;
