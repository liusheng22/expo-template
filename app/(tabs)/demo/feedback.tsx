import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function FeedbackDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  function onShowAlert() {
    Alert.alert('Expo Template', 'Alerts are great for quick confirmations.');
  }

  function onShowConfirm() {
    Alert.alert('Delete item?', 'This action cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive' },
    ]);
  }

  function onStartLoading() {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1200);
  }

  function onSave() {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage('Saved successfully.');
      setTimeout(() => setSaveMessage(''), 1200);
    }, 1500);
  }

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <View className="px-6 py-6">
        <View
          className={
            isDark
              ? 'rounded-2xl bg-slate-800 p-6'
              : 'rounded-2xl bg-white p-6 shadow-sm'
          }
        >
          <Text className={isDark ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-slate-900'}>
            Feedback
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Use alerts and spinners for quick feedback.
          </Text>

          <Pressable
            className={
              isDark
                ? 'mt-6 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-6 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={onShowAlert}
            accessibilityRole="button"
            accessibilityLabel="Show alert"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              Show Alert
            </Text>
          </Pressable>

          <Pressable
            className={
              isDark
                ? 'mt-3 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-3 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={onShowConfirm}
            accessibilityRole="button"
            accessibilityLabel="Show confirm alert"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              Show Confirm Alert
            </Text>
          </Pressable>

          <Pressable
            className={
              isDark
                ? 'mt-3 items-center rounded-xl bg-white px-4 py-3'
                : 'mt-3 items-center rounded-xl bg-slate-900 px-4 py-3'
            }
            onPress={onStartLoading}
            accessibilityRole="button"
            accessibilityLabel="Simulate loading"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-900' : 'text-sm font-semibold text-white'}>
              Simulate Loading
            </Text>
          </Pressable>

          <Pressable
            className={
              isDark
                ? 'mt-3 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-3 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={onSave}
            accessibilityRole="button"
            accessibilityLabel="Save"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              Save Changes
            </Text>
          </Pressable>

          {isLoading ? (
            <View className="items-center pt-4">
              <ActivityIndicator size="small" color={isDark ? '#E2E8F0' : '#0F172A'} />
              <Text className={isDark ? 'mt-2 text-xs text-slate-300' : 'mt-2 text-xs text-slate-500'}>
                Loading...
              </Text>
            </View>
          ) : null}
          {isSaving ? (
            <View
              className={
                isDark
                  ? 'mt-4 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3'
                  : 'mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3'
              }
            >
              <Text className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-600'}>
                Saving changes...
              </Text>
            </View>
          ) : null}
          {saveMessage ? (
            <View
              className={
                isDark
                  ? 'mt-3 rounded-xl border border-emerald-700 bg-emerald-900/30 px-4 py-3'
                  : 'mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3'
              }
            >
              <Text className={isDark ? 'text-xs text-emerald-200' : 'text-xs text-emerald-700'}>
                {saveMessage}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}
