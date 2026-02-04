import { logs } from "../data/logs";

const Dashboard = () => {
    const totalCarbon = logs.reduce((acc, log) => acc + log.carbon, 0);

    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{ backgroundColor: "#e8f5e9", padding: "1rem", borderRadius: "4px", marginBottom: "1rem" }}>
                <h3 style={{ color: "#1b5e20" }}>Total Carbon Footprint: {totalCarbon} Kg</h3>
            </div>

            <h3>Activities Overview</h3>
            <ul>
                {logs.map(log => (
                    <li key={log.id} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{log.activity}</span>
                        <strong>{log.carbon} Kg CO₂</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
