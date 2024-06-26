import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { NotificationContext } from "../context/NotificationProvider";
import { AuthContext } from "../context/AuthProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const useAuth = () => {
  return useContext(AuthContext);
};
