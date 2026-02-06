import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch logs - simulates API call
export const fetchLogs = createAsyncThunk(
  "logs/fetchLogs",
  async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      { id: 1, activity: "Car Travel", carbon: 4 },
      { id: 2, activity: "Electricity Usage", carbon: 6 },
      { id: 3, activity: "Cycling", carbon: 0 },
      { id: 4, activity: "Public Transport", carbon: 2 },
      { id: 5, activity: "Meat Consumption", carbon: 5 },
      { id: 6, activity: "Plant-based Meal", carbon: 1 },
    ];
  }
);

const logsSlice = createSlice({
  name: "logs",
  initialState: {
    logs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.logs = action.payload;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default logsSlice.reducer;
