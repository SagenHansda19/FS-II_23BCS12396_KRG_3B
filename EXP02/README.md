# EcoTrack - Authentication Final

A complete EcoTrack application with authentication, protected routes, and dashboard functionality.

## Features

- User Authentication with Login/Logout
- Protected Routes for Dashboard and Logs
- EcoTrack Dashboard showing carbon footprint
- Daily Logs with categorized activities (High/Low Carbon)
- Simple and clean UI

## Project Structure

```
src/
├── context/
│   └── AuthContext.jsx       # Authentication context provider
├── routes/
│   └── ProtectedRoute.jsx    # Route protection component
├── pages/
│   ├── login.jsx             # Login page
│   ├── dashboard.jsx         # Dashboard page
│   └── Logs.jsx              # Logs page
├── components/
│   └── Header.jsx            # Navigation header
├── data/
│   └── logs.js               # Sample data
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Usage

1. Click "Login" button to authenticate
2. Access Dashboard to see total carbon footprint
3. View Daily Logs to see categorized activities
4. Use Logout button to sign out

## Technologies

- React 19
- Vite
- React Router DOM v7
- CSS (No external UI library)
