import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageValue = string | number | boolean | object | null;

export const storageKeys = {
  onboardingSeen: 'expo-template:onboarding-seen',
  themeMode: 'expo-template:theme-mode',
  userSettings: 'expo-template:user-settings',
} as const;

export async function setJson(key: string, value: StorageValue) {
  try {
    const payload = JSON.stringify(value);
    await AsyncStorage.setItem(key, payload);
  } catch (error) {
    console.warn('[async-storage] setJson failed', error);
  }
}

export async function getJson<T>(key: string, fallback: T): Promise<T> {
  try {
    const stored = await AsyncStorage.getItem(key);
    if (!stored) return fallback;
    return JSON.parse(stored) as T;
  } catch (error) {
    console.warn('[async-storage] getJson failed', error);
    return fallback;
  }
}

export async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn('[async-storage] removeItem failed', error);
  }
}

export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.warn('[async-storage] clearAll failed', error);
  }
}
