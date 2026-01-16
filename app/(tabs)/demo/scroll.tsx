import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function ScrollDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 32 }}>
        <View
          className={
            isDark ? 'mb-6 rounded-2xl bg-slate-800 p-6' : 'mb-6 rounded-2xl bg-white p-6 shadow-sm'
          }
        >
          <Text
            className={
              isDark ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-slate-900'
            }
          >
            ScrollView
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Combine vertical and horizontal scrolling layouts.
          </Text>
        </View>

        <Text
          className={
            isDark
              ? 'mb-3 text-xs uppercase text-slate-400'
              : 'mb-3 text-xs uppercase text-slate-500'
          }
        >
          Horizontal list
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingBottom: 8, paddingHorizontal: 2 }}
          style={{ overflow: 'visible' }}
        >
          {['Cards', 'Charts', 'Media', 'Maps', 'Profile', 'Settings'].map((label) => (
            <View
              key={label}
              className={
                isDark
                  ? 'h-28 w-40 rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4'
                  : 'h-28 w-40 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm'
              }
            >
              <Text
                className={
                  isDark
                    ? 'text-sm font-semibold text-white'
                    : 'text-sm font-semibold text-slate-900'
                }
              >
                {label}
              </Text>
              <Text
                className={isDark ? 'mt-2 text-xs text-slate-400' : 'mt-2 text-xs text-slate-500'}
              >
                Horizontal card
              </Text>
            </View>
          ))}
        </ScrollView>

        <Text
          className={
            isDark
              ? 'mt-6 mb-3 text-xs uppercase text-slate-400'
              : 'mt-6 mb-3 text-xs uppercase text-slate-500'
          }
        >
          Vertical content
        </Text>
        {['Overview', 'Highlights', 'Tasks', 'Timeline', 'Insights', 'Summary'].map((label) => (
          <View
            key={label}
            className={
              isDark
                ? 'mb-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4'
                : 'mb-3 rounded-2xl border border-slate-200 bg-white px-4 py-4'
            }
          >
            <Text
              className={
                isDark
                  ? 'text-sm font-semibold text-slate-100'
                  : 'text-sm font-semibold text-slate-900'
              }
            >
              {label}
            </Text>
            <Text
              className={isDark ? 'mt-2 text-xs text-slate-400' : 'mt-2 text-xs text-slate-500'}
            >
              Scroll vertically to explore content blocks.
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
