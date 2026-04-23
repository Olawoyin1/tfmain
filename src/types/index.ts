export interface RootState {
  counter: CounterState;
  user: UserState;
  ui: UIState;
}

export interface CounterState {
  value: number;
  isLoading: boolean;
  error: string | null;
}

export interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
