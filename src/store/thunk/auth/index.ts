import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, IRegisterData } from '../../../common/types/auth';
import instance from '../../../utils/axios';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/login', data);
      localStorage.setItem('token', user.data.token);
      localStorage.setItem('firstName', user.data.user.firstName);
      return user.data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: IRegisterData, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/register', data);
      localStorage.setItem('token', user.data.token);
      localStorage.setItem('firstName', user.data.user.firstName);
      return user.data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
