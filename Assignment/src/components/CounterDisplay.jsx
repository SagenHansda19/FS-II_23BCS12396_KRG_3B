import { memo } from "react";

// Wrapped in React.memo so it only re-renders when count prop actually changes
const CounterDisplay = memo(({ count, goal }) => {
  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", margin: "10px 0" }}>
      {count} / {goal} glasses completed
    </div>
  );
});

CounterDisplay.displayName = "CounterDisplay";

export default CounterDisplay;
