import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function LayoutDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <View className="px-6 py-6">
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
            Layout & Grid
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Flex rows, columns, and responsive grids.
          </Text>
        </View>

        <View
          className={
            isDark
              ? 'mb-4 rounded-2xl border border-slate-700 bg-slate-900 p-4'
              : 'mb-4 rounded-2xl border border-slate-200 bg-white p-4'
          }
        >
          <Text
            className={
              isDark ? 'text-xs uppercase text-slate-400' : 'text-xs uppercase text-slate-500'
            }
          >
            Row layout
          </Text>
          <View className="mt-3 flex-row gap-3">
            {['A', 'B', 'C'].map((label) => (
              <View
                key={label}
                className={
                  isDark
                    ? 'flex-1 rounded-xl bg-slate-800 px-4 py-6'
                    : 'flex-1 rounded-xl bg-slate-50 px-4 py-6'
                }
              >
                <Text
                  className={
                    isDark
                      ? 'text-sm font-semibold text-slate-100'
                      : 'text-sm font-semibold text-slate-700'
                  }
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          className={
            isDark
              ? 'mb-4 rounded-2xl border border-slate-700 bg-slate-900 p-4'
              : 'mb-4 rounded-2xl border border-slate-200 bg-white p-4'
          }
        >
          <Text
            className={
              isDark ? 'text-xs uppercase text-slate-400' : 'text-xs uppercase text-slate-500'
            }
          >
            Grid layout
          </Text>
          <View className="mt-3 flex-row flex-wrap gap-3">
            {['One', 'Two', 'Three', 'Four', 'Five', 'Six'].map((label) => (
              <View
                key={label}
                className={
                  isDark
                    ? 'w-[48%] rounded-xl bg-slate-800 px-4 py-4'
                    : 'w-[48%] rounded-xl bg-slate-50 px-4 py-4'
                }
              >
                <Text
                  className={
                    isDark
                      ? 'text-sm font-semibold text-slate-100'
                      : 'text-sm font-semibold text-slate-700'
                  }
                >
                  {label}
                </Text>
                <Text
                  className={isDark ? 'mt-1 text-xs text-slate-400' : 'mt-1 text-xs text-slate-500'}
                >
                  Card item
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          className={
            isDark
              ? 'rounded-2xl border border-slate-700 bg-slate-900 p-4'
              : 'rounded-2xl border border-slate-200 bg-white p-4'
          }
        >
          <Text
            className={
              isDark ? 'text-xs uppercase text-slate-400' : 'text-xs uppercase text-slate-500'
            }
          >
            Spacing scale
          </Text>
          <View className="mt-3 gap-3">
            {['Small gap', 'Medium gap', 'Large gap'].map((label, index) => (
              <View
                key={label}
                className={
                  isDark ? 'rounded-xl bg-slate-800 px-4 py-3' : 'rounded-xl bg-slate-50 px-4 py-3'
                }
                style={{ marginLeft: index * 12 }}
              >
                <Text className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-600'}>
                  {label}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
