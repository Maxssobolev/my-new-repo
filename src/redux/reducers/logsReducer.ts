/*
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

export const getLogs = createAsyncThunk('logs/getLogs', async () => {
  const user: Models.User | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  if (user) {
    const { data } = await $authHost.get(`/api/user/logs`);
    return data;
  } else {
    return [];
  }
});

const initialState: { logs: Models.Log[]; isLoading: boolean } = {
  logs: [],
  isLoading: false,
};

const logsReducer = createSlice({
  name: 'logs',
  initialState: initialState,
  reducers: {
    pushNewLog(state, { payload }) {
      state.logs.unshift(payload);
    },

    seenAllIncomingLogs(state) {
      const unSeenIds: number[] = [];
      state.logs.forEach(itm => {
        if (itm.isSeen == false) {
          unSeenIds.push(itm.id);
          itm.isSeen = true;
        }
      });
      $authHost.post('api/log/read', { id: unSeenIds });
    },
  },
  extraReducers: builder => {
    //getting posts reducer
    builder.addCase(getLogs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getLogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.logs = action.payload;
    });
    builder.addCase(logout, () => {
      return logsReducer.getInitialState();
    });
  },
});

const { reducer, actions } = logsReducer;
export const { seenAllIncomingLogs, pushNewLog } = actions;

export default reducer;
*/
