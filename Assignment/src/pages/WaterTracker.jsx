import { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {
  const goal = 8;

  // Load count from localStorage on first render
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("waterCount");
    return saved ? parseInt(saved) : 0;
  });

  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  // Fetch health tip from API on mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setTip(data.slip.advice);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load health tip.");
        setLoading(false);
      });
  }, []);

  // useCallback so these functions don't get recreated on every render
  // CounterDisplay stays memoized because the handlers are stable
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <Header />

      <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
        <h2>Daily Water Tracker 💧</h2>

        {/* CounterDisplay is memoized — won't re-render unless count/goal changes */}
        <CounterDisplay count={count} goal={goal} />

        {count >= goal && (
          <p style={{ color: "green", fontSize: "1.2rem" }}>Goal Reached 🎉</p>
        )}

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button onClick={increment} style={btnStyle("#2196f3")}>
            + Add Glass
          </button>
          <button onClick={decrement} style={btnStyle("#f44336")}>
            - Remove Glass
          </button>
          <button onClick={reset} style={btnStyle("#9e9e9e")}>
            Reset
          </button>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <strong>Today's Health Tip:</strong>
          <p style={{ marginTop: "8px" }}>
            {loading && "Loading tip..."}
            {error && error}
            {!loading && !error && tip}
          </p>
        </div>
      </div>
    </div>
  );
}

function btnStyle(color) {
  return {
    padding: "10px 18px",
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
  };
}

export default WaterTracker;
