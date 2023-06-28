/*eslint-disable*/
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: '',
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async thunkAPI => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions = state.missions.map(mission => {
        if (mission.mission_id !== action.payload) return mission;
        return {...mission, joined: true};
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMissions.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      missions: action.payload,
      error: '',
    }));
    builder.addCase(fetchMissions.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
  },
});

export default missionsSlice.reducer;
export const {joinMission} = missionsSlice.actions;
