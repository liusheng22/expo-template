import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import { ThemeMode, useAppTheme } from '@/components/app-theme-provider';

const demoItems = [
  {
    id: 'button',
    title: 'Pressable',
    description: 'Native-friendly button with feedback and accessibility.',
  },
  {
    id: 'input',
    title: 'TextInput',
    description: 'Capture user input with a clean, simple style.',
  },
  {
    id: 'switch',
    title: 'Switch',
    description: 'Toggle settings and preferences with a platform switch.',
  },
  {
    id: 'image',
    title: 'Image',
    description: 'Render local assets quickly with built-in caching.',
  },
  {
    id: 'modal',
    title: 'Modal',
    description: 'Present temporary content that focuses the user’s attention.',
  },
];

const themeOptions: ThemeMode[] = ['system', 'light', 'dark'];

export default function TabTwoScreen() {
  const { colorScheme, mode, setMode } = useAppTheme();
  const [isEnabled, setIsEnabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [pressCount, setPressCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className={isDark ? 'flex-1 bg-slate-900' : 'flex-1 bg-slate-50'}>
      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <Pressable
          className="flex-1 items-center justify-center bg-black/50 px-6"
          onPress={() => setIsModalVisible(false)}
          accessibilityRole="button"
          accessibilityLabel="Close modal"
        >
          <Pressable
            className={
              isDark ? 'w-full rounded-2xl bg-slate-800 p-6' : 'w-full rounded-2xl bg-white p-6'
            }
            onPress={() => setIsModalVisible(false)}
          >
            <Text
              className={
                isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'
              }
            >
              Modal Example
            </Text>
            <Text
              className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}
            >
              Tap outside or this card to close.
            </Text>
          </Pressable>
        </Pressable>
      </Modal>

      <FlatList
        data={demoItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, paddingBottom: 32 }}
        ListHeaderComponent={
          <View>
            <View
              className={
                isDark
                  ? 'mb-6 rounded-3xl bg-slate-800 p-6'
                  : 'mb-6 rounded-3xl bg-white p-6 shadow-sm'
              }
            >
              <Text
                className={
                  isDark
                    ? 'text-2xl font-semibold text-white'
                    : 'text-2xl font-semibold text-slate-900'
                }
              >
                Component Demos
              </Text>
              <Text
                className={
                  isDark
                    ? 'mt-2 text-sm leading-5 text-slate-300'
                    : 'mt-2 text-sm leading-5 text-slate-600'
                }
              >
                A quick tour of common Expo UI building blocks, kept simple for easy reuse.
              </Text>
            </View>

            <View
              className={
                isDark
                  ? 'mb-6 rounded-2xl border border-slate-700 bg-slate-800 p-5'
                  : 'mb-6 rounded-2xl border border-slate-200 bg-white p-5'
              }
            >
              <Text
                className={
                  isDark
                    ? 'text-base font-semibold text-white'
                    : 'text-base font-semibold text-slate-900'
                }
              >
                Theme Preview
              </Text>
              <Text
                className={isDark ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-600'}
              >
                Current mode: {mode}
              </Text>
              <View
                className={
                  isDark
                    ? 'mt-4 flex-row rounded-xl bg-slate-700 p-1'
                    : 'mt-4 flex-row rounded-xl bg-slate-100 p-1'
                }
              >
                {themeOptions.map((option) => {
                  const isActive = option === mode;
                  return (
                    <Pressable
                      key={option}
                      onPress={() => setMode(option)}
                      className={
                        isActive
                          ? 'flex-1 rounded-lg bg-slate-900 px-3 py-2'
                          : 'flex-1 rounded-lg px-3 py-2'
                      }
                      accessibilityRole="button"
                      accessibilityLabel={`Switch theme to ${option}`}
                    >
                      <Text
                        className={
                          isActive
                            ? 'text-center text-xs font-semibold text-white'
                            : isDark
                              ? 'text-center text-xs font-semibold text-slate-200'
                              : 'text-center text-xs font-semibold text-slate-700'
                        }
                      >
                        {option.toUpperCase()}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
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
            <Text
              className={
                isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'
              }
            >
              {item.title}
            </Text>
            <Text
              className={
                isDark
                  ? 'mt-2 text-sm leading-5 text-slate-300'
                  : 'mt-2 text-sm leading-5 text-slate-600'
              }
            >
              {item.description}
            </Text>
            <View className="mt-4">
              {item.id === 'button' ? (
                <View>
                  <Pressable
                    className={
                      isDark
                        ? 'items-center rounded-xl bg-white px-4 py-3'
                        : 'items-center rounded-xl bg-slate-900 px-4 py-3'
                    }
                    accessibilityRole="button"
                    accessibilityLabel="Primary action"
                    onPress={() => setPressCount((prev) => prev + 1)}
                  >
                    <Text
                      className={
                        isDark
                          ? 'text-sm font-semibold text-slate-900'
                          : 'text-sm font-semibold text-white'
                      }
                    >
                      Primary Action
                    </Text>
                  </Pressable>
                  <Text
                    className={
                      isDark ? 'mt-3 text-xs text-slate-300' : 'mt-3 text-xs text-slate-500'
                    }
                  >
                    Pressed: {pressCount} times
                  </Text>
                </View>
              ) : null}
              {item.id === 'input' ? (
                <TextInput
                  value={inputValue}
                  onChangeText={setInputValue}
                  placeholder="Type something..."
                  className={
                    isDark
                      ? 'rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white'
                      : 'rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900'
                  }
                  placeholderTextColor={isDark ? '#94A3B8' : '#94A3B8'}
                />
              ) : null}
              {item.id === 'switch' ? (
                <View
                  className={
                    isDark
                      ? 'flex-row items-center justify-between rounded-xl border border-slate-700 px-4 py-3'
                      : 'flex-row items-center justify-between rounded-xl border border-slate-200 px-4 py-3'
                  }
                >
                  <Text className={isDark ? 'text-sm text-slate-200' : 'text-sm text-slate-700'}>
                    Enable feature
                  </Text>
                  <Switch value={isEnabled} onValueChange={setIsEnabled} />
                </View>
              ) : null}
              {item.id === 'image' ? (
                <View className="items-center">
                  <Image
                    source={require('@/assets/images/react-logo.png')}
                    style={{ width: 72, height: 72 }}
                  />
                </View>
              ) : null}
              {item.id === 'modal' ? (
                <Pressable
                  className={
                    isDark
                      ? 'items-center rounded-xl bg-white px-4 py-3'
                      : 'items-center rounded-xl bg-slate-900 px-4 py-3'
                  }
                  onPress={() => setIsModalVisible(true)}
                  accessibilityRole="button"
                  accessibilityLabel="Open modal"
                >
                  <Text
                    className={
                      isDark
                        ? 'text-sm font-semibold text-slate-900'
                        : 'text-sm font-semibold text-white'
                    }
                  >
                    Open Modal
                  </Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
