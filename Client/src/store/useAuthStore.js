import { create } from "zustand";
import { login, register } from "../api/user";

const STORAGE_KEYS = {
  USER: "@user",
  TOKEN: "@token",
};

const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) ?? null,
  token: localStorage.getItem(STORAGE_KEYS.TOKEN),
  loading: null,
  message: null,
  error: false,
  awake: false,

  loadUser: async () => {
    try {
      set({ loading: true, error: false, message: null });

      const cachedUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
      set({ user: cachedUser, loading: false });
    } catch (error) {
      set({ error: true, loading: false });
      console.log(error);
    }
  },

  saveUser: async (user, token) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    set({ user: user, token: token });
  },

  logout: async () => {
    localStorage.clear();
  },

  login: async (data) => {
    try {
      set({ loading: true, error: false, message: null });

      const res = await login(data);
      if (res.ok) {
        const user = res.data.data;
        const token = res.headers["x-auth-token"];

        get().saveUser(user, token);
        set({ loading: false });
      }
    } catch (error) {
      set({ error: true, loading: false });
      console.log(error);
    }
  },

  register: async (data) => {
    try {
      set({ loading: true, error: false, message: null });

      const res = await register(data);
      if (res.ok) {
        const user = res.data.data;
        const token = res.headers["x-auth-token"];

        get().saveUser(user, token);
        set({ loading: false });
      }
    } catch (error) {
      set({ error: true, loading: false });
      console.log(error);
    }
  },
}));
