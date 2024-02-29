import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const updateUserName = createAsyncThunk(
    'user/updateName',
    async ({token, newUserName}, thunkAPI) => {
        try {
            //console.log(token);
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

                body: JSON.stringify({ userName: newUserName })
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message);
                throw new Error(errorData.message);
            }

            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    });



const userNameSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        loading: false,
        error: null,
    },
    reducers: {
        // Vous pouvez ajouter des reducers synchrones ici si nécessaire
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserName.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserName.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(updateUserName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userNameSlice.reducer;