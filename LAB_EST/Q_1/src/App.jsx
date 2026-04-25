import './App.css'
import ActivityCard from './ActivityCard'

function App() {
  // Hard-coded activity data
  const activities = [
    { id: 1, title: 'Morning Run', date: '2026-04-25', category: 'Exercise' },
    { id: 2, title: 'Team Meeting', date: '2026-04-25', category: 'Work' },
    { id: 3, title: 'Lunch Break', date: '2026-04-25', category: 'Personal' },
    { id: 4, title: 'Project Work', date: '2026-04-25', category: 'Development' }
  ]

  return (
    <div className="app-container">
      <h1>Activity Tracker</h1>
      
      {/* Map through activities and render ActivityCard for each */}
      <div className="activities-list">
        {activities.map(activity => (
          <ActivityCard 
            key={activity.id}
            title={activity.title}
            date={activity.date}
            category={activity.category}
          />
        ))}
      </div>
    </div>
  )
}

export default App
