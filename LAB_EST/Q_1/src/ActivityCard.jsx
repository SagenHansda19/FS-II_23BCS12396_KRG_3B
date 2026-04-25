// ActivityCard Component - Displays activity information
// Props: title, date, category
function ActivityCard({ title, date, category }) {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p className="date">📅 {date}</p>
      <p className="category">🏷️ {category}</p>
    </div>
  );
}

export default ActivityCard;
