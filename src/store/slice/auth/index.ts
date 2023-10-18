import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../common/types/auth';
import { loginUser, registerUser } from '../../thunk/auth';

const initialState: IAuthState = {
  user: {
    user: {
      id: null,
      firstName: localStorage.getItem('firstName'),
      username: '',
      email: '',
      createdAt: '',
      updatedAt: '',
      watchList: [
        {
          id: null,
          name: '',
          assetId: '',
          createdAt: '',
          updatedAt: '',
          user: null,
        },
      ],
    },
    token: localStorage.getItem('token'),
  },
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
