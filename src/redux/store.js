import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rocketsSlice';
import missionsReducer from './features/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
