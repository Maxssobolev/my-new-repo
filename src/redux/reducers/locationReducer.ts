import { $authHost } from '@/http/host';
import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

const locationReducer = createSlice({
  name: 'city',
  initialState: {
    city: 'Санкт-Петербург',
  },
  reducers: {
    setCity(state, { payload }) {
      if (payload) {
        state.city = payload;
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(logout, () => {
      return locationReducer.getInitialState();
    });
  },
});

const { reducer, actions } = locationReducer;
export const { setCity } = actions;

export default reducer;
