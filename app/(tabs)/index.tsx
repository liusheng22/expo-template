import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

const templateHighlights = [
  {
    id: 'routing',
    title: 'File-based routing',
    description: 'Organize screens with Expo Router and clear folder structure.',
  },
  {
    id: 'theming',
    title: 'Theme-ready styling',
    description: 'Light and dark support out of the box, easy to extend.',
  },
  {
    id: 'performance',
    title: 'Performance focused',
    description: 'Fast lists, optimized assets, and sensible defaults.',
  },
  {
    id: 'tooling',
    title: 'Developer experience',
    description: 'TypeScript, linting, and consistent project conventions.',
  },
];

export default function HomeScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <FlatList
        data={templateHighlights}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, paddingBottom: 32 }}
        ListHeaderComponent={
          <View
            className={
              isDark
                ? 'mb-6 rounded-3xl bg-slate-800 p-6'
                : 'mb-6 rounded-3xl bg-white p-6 shadow-sm'
            }
          >
            <Text className={isDark ? 'text-3xl font-semibold text-white' : 'text-3xl font-semibold text-slate-900'}>
              Expo Starter Template
            </Text>
            <Text className={isDark ? 'mt-2 text-base leading-6 text-slate-300' : 'mt-2 text-base leading-6 text-slate-600'}>
              A clean, minimal foundation with curated patterns to kick-start
              your next app.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View
            className={
              isDark
                ? 'mb-4 rounded-2xl bg-slate-800 p-5'
                : 'mb-4 rounded-2xl bg-white p-5 shadow-sm'
            }
          >
            <Text className={isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'}>
              {item.title}
            </Text>
            <Text className={isDark ? 'mt-2 text-sm leading-5 text-slate-300' : 'mt-2 text-sm leading-5 text-slate-600'}>
              {item.description}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
