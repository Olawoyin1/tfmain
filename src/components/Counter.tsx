import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  incrementAsync,
  clearError,
} from '../store/slices/counterSlice';

const Counter: React.FC = () => {
  const { value, isLoading, error } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleAsyncIncrement = () => {
    dispatch(incrementAsync(5));
  };

  return (
    <div className="counter-container">
      <h2>Counter: {value}</h2>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {isLoading && (
        <div className="loading-indicator">
          Loading...
        </div>
      )}
      
      <div className="button-group">
        <button onClick={handleIncrement} disabled={isLoading}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={isLoading}>
          Decrement
        </button>
        <button onClick={() => handleIncrementByAmount(10)} disabled={isLoading}>
          Add 10
        </button>
        <button onClick={handleReset} disabled={isLoading}>
          Reset
        </button>
        <button onClick={handleAsyncIncrement} disabled={isLoading}>
          Async +5
        </button>
      </div>
    </div>
  );
};

export default Counter;
