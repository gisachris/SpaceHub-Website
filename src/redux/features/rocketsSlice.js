import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketsData: [],
  loading: false,
  error: '',
};

export const fetchData = createAsyncThunk(
  'rockets/fetchData',
  async () => {
    const rocketData = await axios.get('https://api.spacexdata.com/v3/rockets');
    return rocketData;
  },
);

const processData = (arrayofObjects) => {
  const preciseData = arrayofObjects.map((obj) => ({
    id: obj.id,
    name: obj.rocket_name,
    type: obj.rocket_type,
    description: obj.description,
    image: obj.flickr_images[0],
    wikipedia: obj.wikipedia,
    booked: false,
  }));
  return preciseData;
};

const RocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.rocketsData = processData(action.payload);
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default RocketSlice.reducer;
