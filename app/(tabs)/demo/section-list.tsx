import React, { useMemo } from 'react';
import { SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

type DemoSection = {
  title: string;
  data: string[];
};

export default function SectionListDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const sections = useMemo<DemoSection[]>(
    () => [
      {
        title: 'Foundation',
        data: ['Expo Router', 'NativeWind', 'TypeScript'],
      },
      {
        title: 'UI',
        data: ['Cards', 'Lists', 'Forms', 'Modals'],
      },
      {
        title: 'Device',
        data: ['Haptics', 'Camera', 'Location'],
      },
    ],
    [],
  );

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item}
        contentContainerStyle={{ padding: 24, paddingBottom: 32 }}
        renderSectionHeader={({ section }) => (
          <View
            className={
              isDark
                ? 'mb-2 mt-6 rounded-xl bg-slate-800 px-4 py-3'
                : 'mb-2 mt-6 rounded-xl bg-white px-4 py-3 shadow-sm'
            }
          >
            <Text
              className={
                isDark ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-900'
              }
            >
              {section.title}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View
            className={
              isDark
                ? 'mb-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3'
                : 'mb-3 rounded-xl border border-slate-200 bg-white px-4 py-3'
            }
          >
            <Text className={isDark ? 'text-sm text-slate-200' : 'text-sm text-slate-700'}>
              {item}
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <View
            className={
              isDark
                ? 'mb-4 rounded-2xl bg-slate-800 p-6'
                : 'mb-4 rounded-2xl bg-white p-6 shadow-sm'
            }
          >
            <Text
              className={
                isDark ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-slate-900'
              }
            >
              SectionList
            </Text>
            <Text
              className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}
            >
              Group related content with section headers.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
