import { logs } from "../data/logs";

const Logs = () => {
    const highCarbon = logs.filter(log => log.carbon >= 4);
    const lowCarbon = logs.filter(log => log.carbon < 4 && log.carbon != 0);

    return (
        <div>
            <h2>Daily Logs</h2>
            
            <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "red", marginBottom: "1rem" }}>🔴 High Carbon Activities (≥4 Kg)</h3>
                <ul>
                    {highCarbon.length > 0 ? highCarbon.map(log => (
                        <li
                            style={{
                                backgroundColor: "#ffebee",
                                color: "#c62828",
                                border: "2px solid #f44336",
                                padding: "10px"
                            }}
                            key={log.id}
                        >
                            {log.activity} → {log.carbon} Kg CO₂
                        </li>
                    )) : <p>No high carbon activities</p>}
                </ul>
            </div>

            <div>
                <h3 style={{ color: "green", marginBottom: "1rem" }}>🟢 Low Carbon Activities (&lt;4 Kg)</h3>
                <ul>
                    {lowCarbon.length > 0 ? lowCarbon.map(log => (
                        <li
                            style={{
                                backgroundColor: "#e8f5e9",
                                color: "#1b5e20",
                                border: "2px solid #4caf50",
                                padding: "10px"
                            }}
                            key={log.id}
                        >
                            {log.activity} → {log.carbon} Kg CO₂
                        </li>
                    )) : <p>No low carbon activities</p>}
                </ul>
            </div>
        </div>
    );
};

export default Logs;
