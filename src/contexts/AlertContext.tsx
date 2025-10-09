import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AlertData {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
}

interface AlertContextType {
  alerts: AlertData[];
  showAlert: (alert: Omit<AlertData, 'id'>) => void;
  hideAlert: (id: string) => void;
  showSuccessAlert: (message: string, title?: string) => void;
  showErrorAlert: (message: string, title?: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const showAlert = (alertData: Omit<AlertData, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newAlert: AlertData = {
      ...alertData,
      id,
      duration: alertData.duration || 5000
    };
    
    setAlerts(prev => [...prev, newAlert]);
  };

  const hideAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const showSuccessAlert = (message: string, title?: string) => {
    showAlert({
      type: 'success',
      message,
      title
    });
  };

  const showErrorAlert = (message: string, title?: string) => {
    showAlert({
      type: 'error',
      message,
      title
    });
  };

  return (
    <AlertContext.Provider value={{
      alerts,
      showAlert,
      hideAlert,
      showSuccessAlert,
      showErrorAlert
    }}>
      {children}
    </AlertContext.Provider>
  );
};