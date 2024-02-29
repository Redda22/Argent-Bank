import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const user = createAsyncThunk(
    'user',
    async (token, thunkAPI) => {
        try {
            //console.log(token);
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                
                body: JSON.stringify({})
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message);
                throw new Error(errorData.message);
            }

            const data = await response.json();
            //console.log(data);
            return data;
        }
        catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    });



const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(user.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(user.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(user.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;