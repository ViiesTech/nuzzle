import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ShowToast } from '../globalFunctions/ShowToast';

const initialState = {
    token: '',
    isLoading: false,
    error: null,
};


export const UserLogin = createAsyncThunk(
    'auth/UserLogin',
    async (config, { rejectWithValue }) => {
        try {
            const response = await axios.request(config);
            console.log('response redux', response.data)
            if (response.data.success) {
                ShowToast('success', 'Login Successful')
            } else {
                ShowToast('error', response.data.message)
                return rejectWithValue(response.data.message)
            }
            return response.data
        } catch (error) {
            ShowToast('error', error.message);
            return rejectWithValue(error);
        }
    }
);
export const Slices = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        ClearToken: (state,) => {
            state.token = ''
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(UserLogin.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(UserLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.data.token
            })
            .addCase(UserLogin.rejected, (state) => {
                state.isLoading = false;
            });
    },
})

export const { ClearToken } = Slices.actions

export default Slices.reducer