import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

const demos = [
  {
    id: 'pressable',
    title: 'Pressable',
    description: 'Tap feedback and pressed state patterns.',
    href: '/demo/pressable',
  },
  {
    id: 'input',
    title: 'TextInput',
    description: 'Single line, multiline, and clearable input.',
    href: '/demo/input',
  },
  {
    id: 'switch',
    title: 'Switch',
    description: 'Toggle settings with real-time state updates.',
    href: '/demo/switch',
  },
  {
    id: 'image',
    title: 'Image',
    description: 'Local assets and sizing modes.',
    href: '/demo/image',
  },
  {
    id: 'list',
    title: 'Lists',
    description: 'FlatList items, empty state, and refresh.',
    href: '/demo/list',
  },
  {
    id: 'section-list',
    title: 'SectionList',
    description: 'Grouped lists with section headers.',
    href: '/demo/section-list',
  },
  {
    id: 'scroll',
    title: 'ScrollView',
    description: 'Vertical and horizontal scrolling layouts.',
    href: '/demo/scroll',
  },
  {
    id: 'form',
    title: 'Form validation',
    description: 'Basic validation and error feedback.',
    href: '/demo/form',
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Alerts and loading indicators.',
    href: '/demo/feedback',
  },
  {
    id: 'modal',
    title: 'Modal',
    description: 'Present temporary content with focus.',
    href: '/demo/modal',
  },
];

export default function DemoIndexScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <FlatList
        data={demos}
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
            <Text className={isDark ? 'text-2xl font-semibold text-white' : 'text-2xl font-semibold text-slate-900'}>
              Demo Playground
            </Text>
            <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
              Each example is a separate screen, easy to copy or delete.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Link href={item.href} asChild>
            <Pressable
              className={
                isDark
                  ? 'mb-4 rounded-2xl bg-slate-800 p-5'
                  : 'mb-4 rounded-2xl bg-white p-5 shadow-sm'
              }
              accessibilityRole="button"
              accessibilityLabel={`Open demo ${item.title}`}
            >
              <Text className={isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'}>
                {item.title}
              </Text>
              <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
                {item.description}
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}
