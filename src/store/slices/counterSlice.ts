import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CounterState } from '../../types';

const initialState: CounterState = {
  value: 0,
  isLoading: false,
  error: null,
};

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return amount;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to increment';
      });
  },
});

export const { increment, decrement, incrementByAmount, reset, clearError } = counterSlice.actions;
export default counterSlice.reducer;
