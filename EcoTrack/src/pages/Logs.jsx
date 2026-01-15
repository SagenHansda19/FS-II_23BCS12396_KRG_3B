import { logs } from "../data/logs";

const Logs = () => {

    const highCarbon = logs.filter(
        log => log.carbon >= 4
    );

    const lowCarbon = logs.filter(
        log => log.carbon < 4 && log.carbon != 0);

    return (
        <div>
            <h2>Daily logs</h2>
            <h3 style={{ color: "red" }}>High Carbon</h3>
            <ul>
                {highCarbon.map(log => (
                    <li style={{ backgroundColor: "red", width: "fit-content", margin: "0.4rem auto", padding: "0.2rem", }} key={(log.id)}>
                        {log.activity} = {log.carbon} Kg
                    </li>
                ))}
            </ul>
            <h3 style={{ color: "Green" }}>Low Carbon</h3>
            <ul>
                {lowCarbon.map(log => (
                    <li style={{ backgroundColor: "green", width: "fit-content", margin: "0.4rem auto", padding: "0.2rem" }} key={(log.id)}>
                        {log.activity} = {log.carbon} Kg
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Logs;
