import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function SwitchDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [powerSaving, setPowerSaving] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [syncOverCellular, setSyncOverCellular] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [backgroundUpdates, setBackgroundUpdates] = useState(false);

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
            Switch
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Toggle settings and display their current state.
          </Text>

          <View
            className={
              isDark
                ? 'mt-6 flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-6 flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
            }
          >
            <View>
              <Text className={isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'}>
                Power saving mode
              </Text>
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                Reduces background activity
              </Text>
            </View>
            <Switch
              value={powerSaving}
              onValueChange={(value) => {
                setPowerSaving(value);
                if (value) {
                  setAutoPlay(false);
                  setBackgroundUpdates(false);
                }
              }}
            />
          </View>

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
            }
          >
            <View>
              <Text className={isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'}>
                Notifications
              </Text>
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                {notifications ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
            }
          >
            <View>
              <Text className={isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'}>
                Sync over cellular
              </Text>
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                {syncOverCellular ? 'Allowed' : 'Wi-Fi only'}
              </Text>
            </View>
            <Switch value={syncOverCellular} onValueChange={setSyncOverCellular} />
          </View>

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
            }
          >
            <View>
              <Text className={isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'}>
                Auto-play videos
              </Text>
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                {autoPlay ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
            <Switch value={autoPlay} onValueChange={setAutoPlay} disabled={powerSaving} />
          </View>

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
            }
          >
            <View>
              <Text className={isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'}>
                Background updates
              </Text>
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                {backgroundUpdates ? 'On' : 'Off'}
              </Text>
            </View>
            <Switch value={backgroundUpdates} onValueChange={setBackgroundUpdates} disabled={powerSaving} />
          </View>

          <View
            className={
              isDark
                ? 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-4 flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
            }
          >
            <View>
              <Text className={isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'}>
                Beta feature
              </Text>
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                Disabled by default
              </Text>
            </View>
            <Switch value={false} onValueChange={() => {}} disabled />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
