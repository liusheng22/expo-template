import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function ListDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const initialItems = useMemo(
    () => [
      'Expo',
      'NativeWind',
      'Router',
      'Themes',
      'Animations',
      'Haptics',
      'Camera',
      'Location',
      'Notifications',
      'Media',
      'Storage',
      'Web',
    ],
    [],
  );
  const [items, setItems] = useState(initialItems);

  function onRefresh() {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 900);
  }

  function onAddItem() {
    setItems((prev) => [...prev, `New item ${prev.length + 1}`]);
  }

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <FlatList
        data={isEmpty ? [] : items}
        keyExtractor={(item) => item}
        contentContainerStyle={{ padding: 24, paddingBottom: 32 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={isDark ? '#E2E8F0' : '#0F172A'}
          />
        }
        ListHeaderComponent={
          <View
            className={
              isDark
                ? 'mb-6 rounded-2xl bg-slate-800 p-6'
                : 'mb-6 rounded-2xl bg-white p-6 shadow-sm'
            }
          >
            <Text className={isDark ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-slate-900'}>
              Lists
            </Text>
            <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
              Pull to refresh, toggle empty state, and scroll through more items.
            </Text>
            <Text className={isDark ? 'mt-3 text-xs text-slate-400' : 'mt-3 text-xs text-slate-500'}>
              Items: {items.length}
            </Text>
            <View className="mt-4 flex-row gap-3">
              <Pressable
                className={
                  isDark
                    ? 'flex-1 items-center rounded-xl border border-slate-700 px-4 py-3'
                    : 'flex-1 items-center rounded-xl border border-slate-200 px-4 py-3'
                }
                onPress={() => setIsEmpty((prev) => !prev)}
                accessibilityRole="button"
                accessibilityLabel="Toggle empty state"
              >
                <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
                  {isEmpty ? 'Show Items' : 'Show Empty State'}
                </Text>
              </Pressable>
              <Pressable
                className={
                  isDark
                    ? 'flex-1 items-center rounded-xl bg-white px-4 py-3'
                    : 'flex-1 items-center rounded-xl bg-slate-900 px-4 py-3'
                }
                onPress={onAddItem}
                accessibilityRole="button"
                accessibilityLabel="Add item"
              >
                <Text className={isDark ? 'text-sm font-semibold text-slate-900' : 'text-sm font-semibold text-white'}>
                  Add Item
                </Text>
              </Pressable>
            </View>
          </View>
        }
        renderItem={({ item, index }) => (
          <View
            className={
              isDark
                ? 'mb-3 rounded-xl bg-slate-800 px-4 py-3'
                : 'mb-3 rounded-xl bg-white px-4 py-3 shadow-sm'
            }
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-100' : 'text-sm font-semibold text-slate-900'}>
              {item}
            </Text>
            <Text className={isDark ? 'mt-1 text-xs text-slate-400' : 'mt-1 text-xs text-slate-500'}>
              Item #{index + 1}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-1" />}
        ListEmptyComponent={
          <View
            className={
              isDark
                ? 'rounded-xl border border-slate-700 bg-slate-800 p-4'
                : 'rounded-xl border border-slate-200 bg-white p-4 shadow-sm'
            }
          >
            <Text className={isDark ? 'text-sm text-slate-300' : 'text-sm text-slate-600'}>
              No items found. Pull to refresh or add content.
            </Text>
          </View>
        }
        ListFooterComponent={
          !isEmpty ? (
            <View className="mt-2 items-center">
              <Text className={isDark ? 'text-xs text-slate-500' : 'text-xs text-slate-400'}>
                End of list
              </Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
