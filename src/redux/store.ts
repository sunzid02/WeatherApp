import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherReducer';  // Import the weatherReducer

// Combine reducers (this step is important, even if you're using only one reducer for now)
const store = configureStore({
  reducer: {
    weather: weatherReducer,  // Put weatherReducer under the 'weather' key in state
  },
});

export default store;

// Export RootState and AppDispatch types to use in your components
export type RootState = ReturnType<typeof store.getState>; // RootState now contains the 'weather' key
export type AppDispatch = typeof store.dispatch;
