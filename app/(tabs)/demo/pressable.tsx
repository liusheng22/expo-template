import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function PressableDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [isPressed, setIsPressed] = useState(false);
  const [pressCount, setPressCount] = useState(0);
  const [longPressCount, setLongPressCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

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
            Pressable
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            This button changes style when pressed and tracks tap count.
          </Text>

          <Pressable
            className={
              isDark
                ? isPressed
                  ? 'mt-6 items-center rounded-xl bg-slate-200 px-4 py-3'
                  : 'mt-6 items-center rounded-xl bg-white px-4 py-3'
                : isPressed
                  ? 'mt-6 items-center rounded-xl bg-slate-700 px-4 py-3'
                  : 'mt-6 items-center rounded-xl bg-slate-900 px-4 py-3'
            }
            onPress={() => setPressCount((prev) => prev + 1)}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onLongPress={() => setLongPressCount((prev) => prev + 1)}
            accessibilityRole="button"
            accessibilityLabel="Primary action button"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-900' : 'text-sm font-semibold text-white'}>
              Tap Me
            </Text>
          </Pressable>

          <Pressable
            className={
              isDark
                ? 'mt-3 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-3 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={() => setIsDisabled((prev) => !prev)}
            accessibilityRole="button"
            accessibilityLabel="Toggle disabled state"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              {isDisabled ? 'Enable Secondary Button' : 'Disable Secondary Button'}
            </Text>
          </Pressable>

          <Pressable
            disabled={isDisabled}
            className={
              isDisabled
                ? 'mt-3 items-center rounded-xl bg-slate-300 px-4 py-3'
                : isDark
                  ? 'mt-3 items-center rounded-xl bg-white px-4 py-3'
                  : 'mt-3 items-center rounded-xl bg-slate-900 px-4 py-3'
            }
            accessibilityRole="button"
            accessibilityLabel="Secondary action button"
          >
            <Text className={isDisabled ? 'text-sm font-semibold text-slate-500' : isDark ? 'text-sm font-semibold text-slate-900' : 'text-sm font-semibold text-white'}>
              Secondary Action
            </Text>
          </Pressable>

          <Text className={isDark ? 'mt-4 text-xs text-slate-400' : 'mt-4 text-xs text-slate-500'}>
            Pressed {pressCount} times
          </Text>
          <Text className={isDark ? 'mt-1 text-xs text-slate-400' : 'mt-1 text-xs text-slate-500'}>
            Long pressed {longPressCount} times
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
