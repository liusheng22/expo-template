import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function ImageDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';

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
            Image
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Load local assets with different sizing modes.
          </Text>

          <View className="mt-6 items-center gap-4">
            <Image
              source={require('@/assets/images/react-logo.png')}
              style={{ width: 96, height: 96 }}
            />
            <View
              className={
                isDark
                  ? 'w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3'
                  : 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3'
              }
            >
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                Square avatar (96x96)
              </Text>
            </View>
            <View
              className={
                isDark
                  ? 'h-32 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900'
                : 'h-32 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50'
              }
            >
              <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </View>
            <View
              className={
                isDark
                  ? 'w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3'
                  : 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3'
              }
            >
              <Text className={isDark ? 'text-xs text-slate-400' : 'text-xs text-slate-500'}>
                Container image (contain)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
