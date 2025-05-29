import { create } from 'zustand';

interface AuthState {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    login: (token) => {
        const expiryTime = Date.now() + 10 * 60 * 1000;
        localStorage.setItem("token", token);
        localStorage.setItem("token_expiry", expiryTime.toString());
        set({ token });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem("token_expiry")
        set({ token: null });
    },
}));
