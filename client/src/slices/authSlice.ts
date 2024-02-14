import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CustomInitialState {
  loading: boolean;
  user: null  // Change 'null' to 'any' for flexibility in typing
  error: unknown ; // Change 'null' to 'string' to match the potential error value type
}

const initialState: CustomInitialState = {
  loading: true,
  user: null,
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials: { email: string; password: string }) => {
    try {
      const res = await axios.post("http://localhost:4000/auth/login", userCredentials);
      localStorage.setItem('token', res.data.token)
      // if(res.data.role === 'ADMIN'){
        
      // }
      console.log(res);
      return res.data; // Assuming the response contains user data
    } catch (error) {
      // Throw error to be handled by the rejected action
      
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default authSlice;
