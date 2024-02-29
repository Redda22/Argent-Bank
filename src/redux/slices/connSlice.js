import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  token: null,
  error: null,
};


export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {

      // Effectuer la requête API de connexion avec les informations récupérées
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email , password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data.body.token;
    } 
    
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const connSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.error = action.payload ? action.payload : 'An error occurred';
      });
  },
})

export const { logout } = connSlice.actions;

export default connSlice.reducer;