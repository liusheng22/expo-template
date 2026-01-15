import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

import { getJson, setJson, storageKeys } from '@/lib/async-storage';

export type ThemeMode = 'system' | 'light' | 'dark';

type AppThemeContextValue = {
  colorScheme: 'light' | 'dark';
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme() ?? 'light';
  const [mode, setModeState] = useState<ThemeMode>('system');

  useEffect(() => {
    void (async () => {
      const storedMode = await getJson(storageKeys.themeMode, 'system');
      if (storedMode === 'light' || storedMode === 'dark' || storedMode === 'system') {
        setModeState(storedMode);
      }
    })();
  }, []);

  function setMode(nextMode: ThemeMode) {
    setModeState(nextMode);
    void setJson(storageKeys.themeMode, nextMode);
  }

  const value = useMemo<AppThemeContextValue>(
    () => ({
      mode,
      setMode,
      colorScheme: mode === 'system' ? systemScheme : mode,
    }),
    [mode, systemScheme],
  );

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }
  return context;
}
