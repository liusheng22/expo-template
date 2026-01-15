import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/components/app-theme-provider';

export default function ModalDemoScreen() {
  const { colorScheme } = useAppTheme();
  const isDark = colorScheme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <Modal
        transparent
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable
          className="flex-1 items-center justify-center bg-black/50 px-6"
          onPress={() => setIsVisible(false)}
          accessibilityRole="button"
          accessibilityLabel="Close modal"
        >
          <Pressable
            className={
              isDark
                ? 'w-full rounded-2xl bg-slate-800 p-6'
                : 'w-full rounded-2xl bg-white p-6'
            }
            onPress={() => setIsVisible(false)}
          >
            <Text className={isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'}>
              Modal Example
            </Text>
            <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
              Tap outside or this card to close.
            </Text>
          </Pressable>
        </Pressable>
      </Modal>

      <Modal
        transparent
        visible={isSheetVisible}
        animationType="slide"
        onRequestClose={() => setIsSheetVisible(false)}
      >
        <Pressable
          className="flex-1 justify-end bg-black/40"
          onPress={() => setIsSheetVisible(false)}
          accessibilityRole="button"
          accessibilityLabel="Close bottom sheet"
        >
          <Pressable
            className={
              isDark
                ? 'rounded-t-3xl bg-slate-800 px-6 pb-10 pt-6'
                : 'rounded-t-3xl bg-white px-6 pb-10 pt-6'
            }
            onPress={() => setIsSheetVisible(false)}
          >
            <View
              className={
                isDark ? 'mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-700' : 'mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200'
              }
            />
            <Text className={isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'}>
              Bottom Sheet
            </Text>
            <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
              Use a slide modal for secondary actions.
            </Text>
          </Pressable>
        </Pressable>
      </Modal>

      <View className="px-6 py-6">
        <View
          className={
            isDark
              ? 'rounded-2xl bg-slate-800 p-6'
              : 'rounded-2xl bg-white p-6 shadow-sm'
          }
        >
          <Text className={isDark ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-slate-900'}>
            Modal
          </Text>
          <Text className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}>
            Present a focused overlay to highlight key actions.
          </Text>

          <Pressable
            className={
              isDark
                ? 'mt-6 items-center rounded-xl bg-white px-4 py-3'
                : 'mt-6 items-center rounded-xl bg-slate-900 px-4 py-3'
            }
            onPress={() => setIsVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Open modal"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-900' : 'text-sm font-semibold text-white'}>
              Open Modal
            </Text>
          </Pressable>

          <Pressable
            className={
              isDark
                ? 'mt-3 items-center rounded-xl border border-slate-700 px-4 py-3'
                : 'mt-3 items-center rounded-xl border border-slate-200 px-4 py-3'
            }
            onPress={() => setIsSheetVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Open bottom sheet"
          >
            <Text className={isDark ? 'text-sm font-semibold text-slate-200' : 'text-sm font-semibold text-slate-700'}>
              Open Bottom Sheet
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
