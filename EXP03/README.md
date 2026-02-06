# EcoTrack - Experiment 3: Performance Optimization & Material UI

## Objectives Achieved

✅ **Performance Optimization**
- Implemented `React.memo` to prevent avoidable re-renders
- Applied `useMemo` for expensive calculations
- Used `useCallback` for memoized event handlers
- Implemented code splitting with `React.lazy` and `Suspense`
- Reduced initial bundle size through lazy loading

✅ **Material UI Integration**
- Enterprise-grade Material UI components
- Custom Material UI theme with gradient backgrounds
- Responsive layouts with Material UI Grid system
- Icons from Material UI Icon library
- Professional card-based designs

✅ **State Management**
- Redux Toolkit for centralized state management
- Async thunk for fetching logs data
- Redux integration with React components

✅ **Styling**
- Tailwind CSS for utility-first styling
- Material UI theme provider
- Responsive design patterns

## Features

- **Authentication**: Context API with login/logout
- **Protected Routes**: Navigation guard for authenticated users
- **Dashboard**: Real-time carbon footprint analytics
- **Performance**: Optimized re-renders with memoization
- **State Management**: Redux for logs management
- **Lazy Loading**: Code splitting for pages

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/Header.jsx          (Memoized with useCallback)
├── pages/
│   ├── login.jsx                  (Lazy loaded)
│   ├── DashboardLayout.jsx        (Lazy loaded)
│   ├── DashboardSummary.jsx       (Memoized, useMemo)
│   ├── DashboardAnalytics.jsx     (Memoized, useMemo)
│   └── Logs.jsx                   (Lazy loaded, Redux integrated)
├── context/AuthContext.jsx        (Authentication context)
├── routes/ProtectedRoute.jsx      (Route protection)
├── store/
│   ├── store.js                   (Redux store)
│   └── logsSlice.js               (Async thunk, reducers)
├── data/logs.js                   (Static logs data)
├── App.jsx                        (Lazy load routes with Suspense)
└── main.jsx                       (Redux + Material UI setup)
```

## Performance Techniques Used

1. **React.memo**: Header component
2. **useMemo**: Dashboard calculations, Logs filtering
3. **useCallback**: Event handlers (login, logout)
4. **React.lazy + Suspense**: Code splitting for pages
5. **Redux**: State management to avoid prop drilling
