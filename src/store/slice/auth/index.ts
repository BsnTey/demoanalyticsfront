import { createSlice } from '@reduxjs/toolkit';

const initialState: IAuthState = {
  user: {
    user: {
      id: null,
      firstName: '',
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
    token: '',
  },
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
